import { Injectable } from '@nestjs/common';
import { Battle, CreateBattleDto, UpdateBattleDto } from 'src/core';

@Injectable()
export class BattleFactoryService {
    createNewBattle(createBattleDto: CreateBattleDto) {
        const newBattle = new Battle();
        newBattle.player1 = createBattleDto.player1;
        newBattle.player2 = createBattleDto.player2;
        newBattle.match_type = createBattleDto.match_type;
        newBattle.winner = createBattleDto.winner;
        newBattle.manaCap = createBattleDto.manaCap;
        newBattle.ruleset = createBattleDto.ruleset;
        newBattle.inactive = createBattleDto.inactive;
        newBattle.format = createBattleDto.format;
        newBattle.battleDetails = createBattleDto.battleDetails;

        return newBattle;
    }

    updateBattle(updateBattleDto: UpdateBattleDto) {
        const newBattle = new Battle();
        newBattle.player1 = updateBattleDto.player1;
        newBattle.player2 = updateBattleDto.player2;
        newBattle.match_type = updateBattleDto.match_type;
        newBattle.winner = updateBattleDto.winner;
        newBattle.manaCap = updateBattleDto.manaCap;
        newBattle.ruleset = updateBattleDto.ruleset;
        newBattle.inactive = updateBattleDto.inactive;
        newBattle.format = updateBattleDto.format;
        newBattle.battleDetails = updateBattleDto.battleDetails;

        return newBattle;
    }
}