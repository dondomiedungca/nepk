import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: '_nepk_auth_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  first_name: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'user_meta' })
  user_meta?: string;

  @Column({ name: 'password' })
  @Exclude({ toPlainOnly: true })
  password?: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  verified_at?: Date;

  @Column()
  deleted_at?: Date;
}
