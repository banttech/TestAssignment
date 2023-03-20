import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreditorsService } from './creditors.service';
import { Creditor } from '../entities/creditor.entity';

@Controller('creditors')
export class CreditorsController {
  constructor(private readonly creditorsService: CreditorsService) {}

  @Get()
  async findAll(): Promise<Creditor[]> {
    return this.creditorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Creditor> {
    return this.creditorsService.findOne(id);
  }

  @Post()
  async create(@Body() creditor: Creditor): Promise<Creditor> {
    return this.creditorsService.create(creditor);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() creditor: Creditor): Promise<Creditor> {
    return this.creditorsService.update(id, creditor);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.creditorsService.remove(id);
  }
}