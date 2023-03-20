import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Creditor } from '../entities/creditor.entity';

@Injectable()
export class CreditorsService {
  constructor(
    @InjectRepository(Creditor)
    private readonly creditorRepository: Repository<Creditor>,
  ) {}

  async findAll(): Promise<Creditor[]> {
    return this.creditorRepository.find();
  }

  async findOne(id: number): Promise<Creditor> {
    return this.creditorRepository.findOne({ where: { id } });
  }

  async create(creditor: Creditor): Promise<Creditor> {
    return this.creditorRepository.save(creditor);
  }

  async update(id: number, creditor: Creditor): Promise<Creditor> {
    await this.creditorRepository.update(id, creditor);
    return this.creditorRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.creditorRepository.delete(id);
  }
}