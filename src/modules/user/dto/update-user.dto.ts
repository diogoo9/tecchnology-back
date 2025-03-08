import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  cep?: string;
  cpf?: string;
  email?: string;
  id?: string;
  locality?: string;
  name?: string;
  neighborhood?: string;
  password?: string;
  phone_number?: string;
  profile?: 'GenteECultura' | 'Administrador' | 'Colaborador';
  public_place?: string;
  uf?: string;
}
