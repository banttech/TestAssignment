import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditorUser } from '../entities/creditorUser.entity';

@Injectable()
export class CreditorUserService {
  constructor(
    @InjectRepository(CreditorUser)
    private readonly creditorUserRepository: Repository<CreditorUser>
  ) {}

  async findDetailsByUserId(id: number): Promise<CreditorUser[]> {
    return this.creditorUserRepository.find({
      where: { userId: id },
      relations: ['creditor'],
    });
  }

  async findDetailsById(id: number): Promise<CreditorUser> {
    return this.creditorUserRepository.findOne({
      where: { id },
    });
  }

  async create(creditorUser: CreditorUser): Promise<CreditorUser> {
    return this.creditorUserRepository.save(creditorUser);
  }

  async update(id: number, creditorUser: CreditorUser): Promise<CreditorUser> {
    await this.creditorUserRepository.update(id, creditorUser);
    return this.creditorUserRepository.findOne({
      where: { id: id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.creditorUserRepository.delete(id);
  }

  async getAllRecordsByUserId(userId: number): Promise<CreditorUser[]> {
    return this.creditorUserRepository
      .createQueryBuilder('creditorUser')
      .leftJoinAndSelect('creditorUser.creditor', 'creditor')
      .where('creditorUser.userId = :userId', { userId })
      .getMany();
  }
}
