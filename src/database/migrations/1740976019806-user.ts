import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1740976019806 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
            isUnique: true,
          },
          { name: 'name', type: 'varchar' },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'cpf', type: 'varchar', isUnique: true },
          { name: 'cep', type: 'varchar' },
          { name: 'uf', type: 'varchar' },
          { name: 'locality', type: 'varchar' },
          { name: 'neighborhood', type: 'varchar' },
          { name: 'public_place', type: 'varchar' },
          { name: 'phone_number', type: 'varchar' },
          { name: 'profile', type: 'varchar' },
          { name: 'password', type: 'varchar' },
          { name: 'created_at', type: 'timestamp' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
