import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Creditor } from './creditor.entity';

export class CreditorData {
  creditorId: number;
  userId: number;
  price: number;
}

@Entity()
export class CreditorUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creditorId: number;

  @Column()
  userId: number;

  @Column()
  price: number;

  @ManyToOne(() => Creditor, creditor => creditor.creditorUsers)
  creditor: Creditor;
  user: any;
}
