import { Module } from '@nestjs/common';
import { TokenRepository } from '../auth/repository/token.repository';
import { UserRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, TokenRepository],
})
export class UserModule {}
