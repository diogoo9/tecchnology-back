import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  TableForeignKey,
} from 'typeorm';

@Entity('tokens')
export class Token {
  @PrimaryColumn()
  token: string;

  @Column()
  user_id: string;

  @Column()
  expire_date: Date;

  @Column()
  canceled_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
