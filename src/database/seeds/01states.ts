import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateStates implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('states')
      .values([
        {
          id: 'AC',
          name: 'Acre',
        },
        {
          id: 'AL',
          name: 'Alagoas',
        },
        {
          id: 'AM',
          name: 'Amazonas',
        },
        {
          id: 'AP',
          name: 'Amapá',
        },
        {
          id: 'BA',
          name: 'Bahia',
        },
        {
          id: 'CE',
          name: 'Ceará',
        },
        {
          id: 'DF',
          name: 'Distrito Federal',
        },
        {
          id: 'ES',
          name: 'Espírito Santo',
        },
        {
          id: 'GO',
          name: 'Goiás',
        },
        {
          id: 'MA',
          name: 'Maranhão',
        },
        {
          id: 'MG',
          name: 'Minas Gerais',
        },
        {
          id: 'MS',
          name: 'Mato Grosso do Sul',
        },
        {
          id: 'MT',
          name: 'Mato Grosso',
        },
        {
          id: 'PA',
          name: 'Pará',
        },
        {
          id: 'PB',
          name: 'Paraíba',
        },
        {
          id: 'PE',
          name: 'Pernambuco',
        },
        {
          id: 'PI',
          name: 'Piauí',
        },
        {
          id: 'PR',
          name: 'Paraná',
        },
        {
          id: 'RJ',
          name: 'Rio de Janeiro',
        },
        {
          id: 'RN',
          name: 'Rio Grande do Norte',
        },
        {
          id: 'RO',
          name: 'Rondônia',
        },
        {
          id: 'RR',
          name: 'Roraima',
        },
        {
          id: 'RS',
          name: 'Rio Grande do Sul',
        },
        {
          id: 'SC',
          name: 'Santa Catarina',
        },
        {
          id: 'SE',
          name: 'Sergipe',
        },
        {
          id: 'SP',
          name: 'São Paulo',
        },
        {
          id: 'TO',
          name: 'Tocantins',
        },
      ])
      .execute();
  }
}
