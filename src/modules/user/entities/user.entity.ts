import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  cep: string;

  @Column()
  uf: string;

  @Column()
  locality: string;

  @Column()
  neighborhood: string;

  @Column()
  public_place: string;

  @Column()
  phone_number: string;

  @Column()
  profile: 'GenteECultura' | 'Administrador' | 'Colaborador';

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
