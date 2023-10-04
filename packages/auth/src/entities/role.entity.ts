import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: '_nepk_auth_roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
