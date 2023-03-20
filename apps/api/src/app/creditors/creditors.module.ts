import { Module } from '@nestjs/common';
import { CreditorsService } from './creditors.service';
import { CreditorsController } from './creditors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Creditor } from '../entities/creditor.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Creditor]),
  ],
  providers: [CreditorsService],
  controllers: [CreditorsController]
})
export class CreditorsModule {}
