import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreditorUser } from './creditorUser.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @OneToMany(() => CreditorUser, creditorUser => creditorUser.user)
  creditorUsers: CreditorUser[];
} 