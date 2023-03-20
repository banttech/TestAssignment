import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreditorUser } from './creditorUser.entity';


@Entity()
export class Creditor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => CreditorUser, creditorUser => creditorUser.creditor)
  creditorUsers: CreditorUser[];
}