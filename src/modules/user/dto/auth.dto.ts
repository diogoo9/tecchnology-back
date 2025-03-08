import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class AuthUserDTO extends PartialType(User) {
  email?: string;
  password?: string;
}
