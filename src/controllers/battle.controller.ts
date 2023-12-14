import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBattleDto, UpdateBattleDto } from 'src/core';
import { BattleUseCases } from 'src/use-cases';

@Controller('api/battle')
export class BattleController {
    constructor(private battleUseCases: BattleUseCases) { }

    @Get()
    async getAll() {
        return await this.battleUseCases.getAllBattles();
    }

    @Get(':id')
    async getById(@Param('id') id: any) {
        return await this.battleUseCases.getBattleById(id);
    }

    @Post()
    async createBattle(@Body() createBattleDto: CreateBattleDto) {
        return await this.battleUseCases.createBattle(createBattleDto);
    }

    @Put(':id')
    async updateBattle(@Param('id') id: string, @Body() updateBattleDto: UpdateBattleDto) {
        return await this.battleUseCases.updateBattle(id, updateBattleDto);
    }
}