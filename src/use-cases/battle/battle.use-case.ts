import { Injectable } from "@nestjs/common";
import { Battle } from "../../core/entities";
import { IDataServices } from "src/core";
import { CreateBattleDto, UpdateBattleDto } from "src/core/dtos";
import { BattleFactoryService } from "./battle-factory.service";

@Injectable()
export class BattleUseCases {
    constructor(
        private dataServices: IDataServices,
        private battleFactoryService: BattleFactoryService,
    ) { }

    async getAllBattles(): Promise<Battle[]> {
        return await this.dataServices.battles.getAll();
    }

    async getBattleById(id: any): Promise<Battle> {
        return await this.dataServices.battles.get(id);
    }

    async createBattle(createBattleDto: CreateBattleDto): Promise<Battle> {
        const battle = this.battleFactoryService.createNewBattle(createBattleDto);
        return await this.dataServices.battles.post(battle);
    }

    async updateBattle(battleId: string, updateBattleDto: UpdateBattleDto): Promise<Battle> {
        const battle = this.battleFactoryService.updateBattle(updateBattleDto);
        return await this.dataServices.battles.update(battleId, battle);
    }
}