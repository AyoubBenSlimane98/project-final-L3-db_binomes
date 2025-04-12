export class SingleUserDto {
  nom: string;
  prenom: string;
  email: string;
  matricul: string;
  sexe: 'Male' | 'Female';
  dateNaissance: string;
}

export class UserDto {
  users: SingleUserDto[];
}

export class EtuBinome {
  matricul1: string;
  matricul2?: string;
}

export class CreateBinomesDto {
  binomes: EtuBinome[];
}

export class Binome {
  id: number;
  etudaint1Id: number;
  etudaint2Id: number | null;
}
