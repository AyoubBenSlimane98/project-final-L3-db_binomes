import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Binome, EtuBinome, UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getCountUsers() {
    const nbr = await this.prisma.binome.count();
    return {
      count: nbr,
    };
  }
  async getAllusers() {
    const binomes = await this.prisma.binome.findMany({
      select: {
        id: true,
        Etudaint1: true,
        Etudaint2: true,
      },
    });
    if (!binomes) {
      throw new NotFoundException('don not esxit any binomes');
    }
    return binomes;
  }
  async createAllAccountUsers(userDto: UserDto) {
    const formattedUsers = userDto.users.map((user) => ({
      ...user,
      dateNaissance: new Date(user.dateNaissance),
    }));

    return await this.prisma.etudaint.createMany({
      data: formattedUsers,
      skipDuplicates: true,
    });
  }

  //   async createBinome(etu: EtuBinome) {
  //     const { matricul1, matricul2 } = etu;

  //     const result = await this.prisma.$transaction(async (prisma) => {
  //       const etu1 = await prisma.etudaint.findUnique({
  //         where: { matricul: matricul1 },
  //         select: { id: true },
  //       });

  //       if (!etu1) {
  //         throw new NotFoundException(
  //           `Student with matricul ${matricul1} not found`,
  //         );
  //       }

  //       const existingBinome1 = await prisma.binome.findFirst({
  //         where: {
  //           OR: [{ etudaint1Id: etu1.id }, { etudaint2Id: etu1.id }],
  //         },
  //       });

  //       if (existingBinome1) {
  //         throw new ConflictException(
  //           `Student with matricul ${matricul1} is already in a binôme`,
  //         );
  //       }

  //       if (matricul2) {
  //         const etu2 = await prisma.etudaint.findUnique({
  //           where: { matricul: matricul2 },
  //           select: { id: true },
  //         });

  //         if (!etu2) {
  //           throw new NotFoundException(
  //             `Student with matricul ${matricul2} not found`,
  //           );
  //         }

  //         const existingBinome2 = await prisma.binome.findFirst({
  //           where: {
  //             OR: [{ etudaint1Id: etu2.id }, { etudaint2Id: etu2.id }],
  //           },
  //         });

  //         if (existingBinome2) {
  //           throw new ConflictException(
  //             `Student with matricul ${matricul2} is already in a binôme`,
  //           );
  //         }

  //         await prisma.binome.create({
  //           data: {
  //             etudaint1Id: etu1.id,
  //             etudaint2Id: etu2.id,
  //           },
  //         });

  //         return {
  //           message: 'Binôme created successfully',
  //         };
  //       }

  //       await prisma.binome.create({
  //         data: {
  //           etudaint1Id: etu1.id,
  //         },
  //       });

  //       return {
  //         message: 'Single created successfully',
  //       };
  //     });

  //     return result;
  //   }

  async createBinomes(binomes: EtuBinome[]) {
    const result = await this.prisma.$transaction(async (prisma) => {
      const createdBinomes: Binome[] = [];

      for (const etu of binomes) {
        const { matricul1, matricul2 } = etu;

        const etu1 = await prisma.etudaint.findUnique({
          where: { matricul: matricul1 },
          select: { id: true },
        });

        if (!etu1) {
          throw new NotFoundException(
            `Student with matricul ${matricul1} not found`,
          );
        }

        const existingBinome1 = await prisma.binome.findFirst({
          where: {
            OR: [{ etudaint1Id: etu1.id }, { etudaint2Id: etu1.id }],
          },
        });

        if (existingBinome1) {
          throw new ConflictException(
            `Student with matricul ${matricul1} is already in a binôme`,
          );
        }

        if (matricul2) {
          const etu2 = await prisma.etudaint.findUnique({
            where: { matricul: matricul2 },
            select: { id: true },
          });

          if (!etu2) {
            throw new NotFoundException(
              `Student with matricul ${matricul2} not found`,
            );
          }

          const existingBinome2 = await prisma.binome.findFirst({
            where: {
              OR: [{ etudaint1Id: etu2.id }, { etudaint2Id: etu2.id }],
            },
          });

          if (existingBinome2) {
            throw new ConflictException(
              `Student with matricul ${matricul2} is already in a binôme`,
            );
          }

          const binome = await prisma.binome.create({
            data: {
              etudaint1Id: etu1.id,
              etudaint2Id: etu2.id,
            },
          });

          createdBinomes.push(binome);
        } else {
          const binome = await prisma.binome.create({
            data: {
              etudaint1Id: etu1.id,
              etudaint2Id: null,
            },
          });

          createdBinomes.push(binome);
        }
      }

      return {
        message: 'Binômes created successfully',
        createdBinomes,
      };
    });

    return result;
  }
}
