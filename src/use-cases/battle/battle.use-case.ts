import { Injectable } from "@nestjs/common";
import { IBattleServices } from "../../core/abstracts";
@Injectable()
export class BattleUseCases {
    constructor(
        private battleServices: IBattleServices,
    ) { }

    async fetchAndSaveBattles(): Promise<void> {
        return await this.battleServices.fetchAndSaveBattles();
    }

    async findBattlesByCombinatorialCriteria(manaCap: number, ruleset: string, inactive: string): Promise<any> {
        return await this.battleServices.findBattlesByCombinatorialCriteria(manaCap, ruleset, inactive);
    }
}