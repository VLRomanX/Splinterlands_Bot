import { Controller, Post } from '@nestjs/common';
import { BattleUseCases } from 'src/use-cases';

@Controller('api/battle/list')
export class BattleController {
    constructor(private battleUseCases: BattleUseCases) { }

    @Post()
    async fetchAndSaveBattles() {
        return await this.battleUseCases.fetchAndSaveBattles();
    }
}