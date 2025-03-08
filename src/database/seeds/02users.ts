import { Faker, faker } from '@faker-js/faker';
import { User } from 'src/modules/user/entities/user.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log(1111);

    const data = faker.helpers.multiple(
      () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        cpf: `${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({ min: 100, max: 999 })}-${faker.number.int({ min: 10, max: 99 })}`,
        cep: '57073-552',
        uf: 'AL',
        locality: 'Maceió',
        neighborhood: 'Cidade Universitária',
        public_place: '2ª Travessa São Pedro',
        phone_number: '(00)00000-0000',
        profile: 'Colaborador',
        created_at: '2025-03-05T21:49:19.577Z',
        password:
          '$2b$10$\/lPpPp4Ver2Ei\/tZp3X4Wu\/KMOBjmTgFkJekJk7vbH3t.842t9laK',
      }),
      {
        count: 200,
      },
    );

    console.log(data);

    await connection
      .createQueryBuilder()
      .insert()
      .into('users', [
        'id',
        'name',
        'email',
        'cpf',
        'cep',
        'uf',
        'locality',
        'neighborhood',
        'public_place',
        'phone_number',
        'profile',
        'created_at',
        'password',
      ])
      .values([
        /*           id: '87849a7b-ac57-499b-b418-cde65fd74fc4',
        {
          name: 'teste Santos',
          email: 'diogo@gmail.com',
          cpf: '101.555.555-55',
          cep: '57073-552',
          uf: 'AL',
          locality: 'Maceió',
          neighborhood: 'Cidade Universitária',
          public_place: '2ª Travessa São Pedro',
          phone_number: '(82)98142-6615',
          profile: 'Administrador1',
          password:
            '$2b$10$eJvJLpJIIbTIk8394ezupeFN5goqwZX5b1HFX8cys5V1fERl.yGJm',
          created_at: '2025-03-06 02:34:43.216',
        },
        {
          id: 'ef17c4bc-c69d-40fb-b2f6-6b7f61bae17a',
          name: 'teste Santos',
          email: 'diogo1@gmail.com',
          cpf: '101.555.555-51',
          cep: '57073-552',
          uf: 'AL',
          locality: 'Maceió',
          neighborhood: 'Cidade Universitária',
          public_place: '2ª Travessa São Pedro',
          phone_number: '(82)98142-6615',
          profile: 'Administrador',
          created_at: '2025-03-05T21:49:19.577Z',
          password:
            '$2b$10$ufGngb.uBysu4oRO2Eym\/u7FpUwj6ltBrSlNgalZN.cFchqc0Olea',
        },
        {
          id: '6c0ca65a-cd96-4162-8886-5746204ef973',
          name: 'ddddddddddddddd',
          email: 'dssdsdsd@gmail.com',
          cpf: '111.112.222-22',
          cep: '57073-552',
          uf: 'AL',
          locality: 'Maceió',
          neighborhood: 'Cidade Universitária',
          public_place: '2ª Travessa São Pedro',
          phone_number: '(88)88888-8888',
          profile: 'Administrador',
          created_at: '2025-03-05T21:49:19.577Z',
          password:
            '$2b$10$TbWgPAGHL3sJCg\/\/tl\/dsOcvkQoAVeUhm29hH0AP71c6XPzMT24Lu',
        },
        {
          id: 'a9a352a8-8668-43d1-bc4e-12cd969e83b6',
          name: '0000adsdsdsd',
          email: 'ddddddd@gmail.com',
          cpf: '122.222.222-22',
          cep: '57073-552',
          uf: 'AL',
          locality: 'Maceió',
          neighborhood: 'Cidade Universitária',
          public_place: '2ª Travessa São Pedro',
          phone_number: '(22)22222-2222',
          profile: 'Administrador',
          created_at: '2025-03-05T21:49:19.577Z',
          password:
            '$2b$10$mK\/WnTKgiwWE9POzcoJyz.klvup65mGvT1R4L0PS.l94rE\/wHp4Yq',
        }, */
        ...data,
      ])
      .execute();
  }
}
