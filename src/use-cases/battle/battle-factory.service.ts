import { Injectable } from '@nestjs/common';
import { Battle, CreateBattleDto, UpdateBattleDto } from 'src/core';

@Injectable()
export class BattleFactoryService {
    createNewBattle(createBattleDto: CreateBattleDto) {
        const newBattle = new Battle();
        newBattle.battleQueueId1 = createBattleDto.battleQueueId1;
        newBattle.battleQueueId2 = createBattleDto.battleQueueId2;
        newBattle.player1Id = createBattleDto.player1Id;
        newBattle.player2Id = createBattleDto.player2Id;
        newBattle.winnerId = createBattleDto.winnerId;
        newBattle.createdAt = createBattleDto.createdAt;
        newBattle.manaCap = createBattleDto.manaCap;
        newBattle.ruleset = createBattleDto.ruleset;
        newBattle.inactive = createBattleDto.inactive;
        newBattle.battleDetails = createBattleDto.battleDetails;

        return newBattle;
    }

    updateBattle(updateBattleDto: UpdateBattleDto) {
        const newBattle = new Battle();
        newBattle.battleQueueId1 = updateBattleDto.battleQueueId1;
        newBattle.battleQueueId2 = updateBattleDto.battleQueueId2;
        newBattle.player1Id = updateBattleDto.player1Id;
        newBattle.player2Id = updateBattleDto.player2Id;
        newBattle.winnerId = updateBattleDto.winnerId;
        newBattle.createdAt = updateBattleDto.createdAt;
        newBattle.manaCap = updateBattleDto.manaCap;
        newBattle.ruleset = updateBattleDto.ruleset;
        newBattle.inactive = updateBattleDto.inactive;
        newBattle.battleDetails = updateBattleDto.battleDetails;

        return newBattle;
    }
}