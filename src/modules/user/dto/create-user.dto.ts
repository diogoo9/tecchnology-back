import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PartialType(User) {
  id?: string;
  cep?: string;
  cpf?: string;
  email?: string;
  locality?: string;
  name?: string;
  neighborhood?: string;
  password?: string;
  phone_number?: string;
  public_place?: string;
  uf?: string;
  profile?: 'GenteECultura' | 'Administrador' | 'Colaborador';
}
