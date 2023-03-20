import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Creditor } from './entities/creditor.entity';
import { CreditorUser } from './entities/creditorUser.entity';
import { UsersModule } from './users/users.module';
import { CreditorsModule } from './creditors/creditors.module';
import {CreditorUserModule} from './creditorUser/userCreditor.module';


@Module({
  imports: [
    UsersModule,
    CreditorsModule,
    CreditorUserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydatabase.db',
      entities: [User, Creditor, CreditorUser],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {} 
