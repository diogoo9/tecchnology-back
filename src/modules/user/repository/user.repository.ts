import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(data: CreateUserDto) {
    const farmCropsCulture = new User();
    console.log(data);

    Object.assign(farmCropsCulture, data);

    const newfarm = await this.insert(farmCropsCulture);
    return newfarm;
  }

  getAll(): Promise<User[]> {
    return this.createQueryBuilder().skip(10).take(100).getMany();
  }

  getByAllIds(findData: User): Promise<User> {
    return this.findOne({
      where: { ...findData },
    });
  }

  async findUsers(text: string, page = 0, limit = 10): Promise<any> {
    let users = this.createQueryBuilder('user').orderBy('name');
    if (text) {
      users = users
        .where('upper(name) like upper(:text)', { text: `%${text}%` })
        .orWhere('email like :text', { text: `%${text}%` })
        .orWhere('cpf like :text', { text: `%${text}%` });
    }

    const count = await users.getCount();
    const data = await users
      .skip(page * limit)
      .take(limit)
      .getMany();

    const nextPage =
      Number(page) + 1 * limit <= count ? Number(page) + 1 : null;

    return {
      data,
      total: count,
      page: Number(page),
      nextPage,
    };
  }

  findByEmail(email: string) {
    return this.findOne({ where: { email } });
  }

  findById(id: string) {
    console.log(id);

    return this.findOne({ where: { id } });
  }

  deleteFarm(id: string) {
    //return this.softRemove({ id });
  }
}
