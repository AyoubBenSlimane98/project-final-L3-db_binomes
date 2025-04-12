import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit
{
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect()
      .then(() => {
        console.log('Database connected with Prisma');
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
