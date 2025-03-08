import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';
import { UserRepository } from '../user/repository/user.repository';
import { Token } from './entities/token.entity';
import { TokenRepository } from './repository/token.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Token])],
  controllers: [],
  providers: [UserRepository, TokenRepository],
})
export class AuthModule {}
