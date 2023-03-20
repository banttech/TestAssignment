import { Module } from '@nestjs/common';
import { CreditorUserService } from './creditorUser.service';
import { CreditorUserController } from './creditorUser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditorUser } from '../entities/creditorUser.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CreditorUser]),
    ],
    providers: [CreditorUserService],
    controllers: [CreditorUserController]
})
export class CreditorUserModule {}