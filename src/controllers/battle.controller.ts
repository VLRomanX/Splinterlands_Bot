import { Controller, Get, Post, Query } from '@nestjs/common';
import { BattleUseCases } from 'src/use-cases';

@Controller('api/battle/list')
export class BattleController {
    constructor(private battleUseCases: BattleUseCases) { }

    @Post()
    async fetchAndSaveBattles() {
        return await this.battleUseCases.fetchAndSaveBattles();
    }

    @Get()
    async findBattlesByCombinatorialCriteria(
        @Query('manaCap') manaCap: number,
        @Query('ruleset') ruleset: string,
        @Query('inactive') inactive: string
    ) {
        return await this.battleUseCases.findBattlesByCombinatorialCriteria(manaCap, ruleset, inactive);
    }
}