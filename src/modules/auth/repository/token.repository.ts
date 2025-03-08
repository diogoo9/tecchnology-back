import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateTokenDTO } from '../dto/create-token.dto';
import { Token } from '../entities/token.entity';

@Injectable()
export class TokenRepository extends Repository<Token> {
  constructor(dataSource: DataSource) {
    super(Token, dataSource.createEntityManager());
  }

  async createToken(data: CreateTokenDTO) {
    const token = new Token();
    console.log(data);

    Object.assign(token, data);

    const newfarm = await this.insert(token);
    return newfarm;
  }

  invalidAll(userId: string, currentDate): Promise<any> {
    return this.update({ user_id: userId }, { canceled_at: currentDate });
  }
}
