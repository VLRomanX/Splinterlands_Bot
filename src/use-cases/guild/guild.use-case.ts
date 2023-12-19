import { Injectable } from "@nestjs/common";
import { IDataServices } from "src/core";
import { GuildFactoryService } from "./guild-factory.service";
import { Guild, CreateGuildDto, UpdateGuildDto } from "src/core";

@Injectable()
export class GuildUseCases {
    constructor(
        private dataServices: IDataServices,
        private guildFactoryService: GuildFactoryService,
    ) { }

    async getAllBattles(): Promise<Guild[]> {
        return await this.dataServices. .getAll();
    }

    async getBattleById(id: any): Promise<Battle> {
        return await this.dataServices.battles.get(id);
    }

    async createBattle(createBattleDto: CreateBattleDto): Promise<Battle> {
        const battle = this.battleFactoryService.createNewBattle(createBattleDto);
        return await this.dataServices.battles.create(battle);
    }

    async updateBattle(battleId: string, updateBattleDto: UpdateBattleDto): Promise<Battle> {
        const battle = this.battleFactoryService.updateBattle(updateBattleDto);
        return await this.dataServices.battles.update(battleId, battle);
    }
}