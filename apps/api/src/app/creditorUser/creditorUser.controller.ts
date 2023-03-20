import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreditorUserService } from './creditorUser.service';

@Controller('creditorUser')
export class CreditorUserController {
    constructor(private readonly creditorUserService: CreditorUserService) {}
    
    @Get(':id')
    async findDetailsByUserId(@Param('id') id: number): Promise<any> {
        return this.creditorUserService.findDetailsByUserId(id);
    }

    @Get('creditUserDetail/:id')
    async findDetailsById(@Param('userCredentialId') userCredentialId: number, @Param('id') id: number): Promise<any> {
        return this.creditorUserService.findDetailsById(id);
    }

    @Post()
    async create(@Body() creditorUser: any): Promise<any> {
        return this.creditorUserService.create(creditorUser);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() creditorUser: any): Promise<any> {
        return this.creditorUserService.update(id, creditorUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.creditorUserService.delete(id);
    }

    @Get('all/:id')
    async getAllRecordsByUserId(@Param('id') id: number): Promise<any> {
        return this.creditorUserService.getAllRecordsByUserId(id);
    }
}
