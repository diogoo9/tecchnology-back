import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Token1741018665890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tokens',
        columns: [
          {
            name: 'token',
            type: 'varchar',
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'varchar',
          },
          {
            name: 'expire_date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'canceled_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_TokenUser',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tokens');
  }
}
