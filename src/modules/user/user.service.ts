import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from 'src/errors/AppError';
import { CreateTokenDTO } from '../auth/dto/create-token.dto';
import { TokenRepository } from '../auth/repository/token.repository';
import { AuthUserDTO } from './dto/auth.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private tokenRepository: TokenRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const passwordCrypted = await bcrypt.hash(createUserDto.password, 10);
    const newData = { ...createUserDto, password: passwordCrypted };

    return this.userRepository.createUser(newData);
  }

  async auth(authData: AuthUserDTO) {
    const { email, password } = authData;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('email ou senha incorreta!');
    }

    const validatedPass = await bcrypt.compare(password, user.password);

    console.log(validatedPass);
    if (validatedPass) {
    }

    const currentDate = new Date().getTime();
    const expiresDate = new Date(currentDate + 2 * 24 * 60 * 60 * 1000);

    const hash = sign(
      {
        name: user.name,
        type: 'user',
      },
      process.env.BCRYPT_KEY,
      {
        subject: user.id,
        expiresIn: process.env.BCRYPT_HASH_EXPIRES_IN,
      },
    );

    await this.tokenRepository.invalidAll(user.id, new Date());

    const token: CreateTokenDTO = {
      token: hash,
      expire_date: expiresDate,
      user_id: user.id,
    };
    const created = await this.tokenRepository.createToken(token);

    //return {token:created['token']}
    return {
      statusCode: 201,
      message: 'acesso liberado',
      token: created['token'],
      routes: ['home', 'meus agendamentos'],
      user: {
        name: user.name,
        type: 'u',
      },
    };

    //return this.userRepository.createUser(newData);
  }

  findAll(text: string, page: number, limit: number) {
    console.log(text?.length);

    return this.userRepository.findUsers(text, page, limit);
  }

  findOne(id: string) {
    return this.userRepository.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    const affected = (await this.userRepository.update({ id }, updateUserDto))
      .affected;

    if (affected == 1) {
      return {
        message: 'Usuário alterado com sucesso',
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
