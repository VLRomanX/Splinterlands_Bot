import { Injectable } from "@nestjs/common";
import { GuildMember, IBattleServices } from "src/core";
import { Battle, BattleDocument } from "./model";
import axios from "axios";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GuildMemberDocument } from "../guild-member";

@Injectable()
export class BattleServices implements IBattleServices {
    constructor(
        @InjectModel(Battle.name)
        private batleRepository: Model<BattleDocument>,
        @InjectModel(GuildMember.name)
        private guildMembersRepository: Model<GuildMemberDocument>,
    ) { }

    async fetchAndSaveBattles(): Promise<void> {
        try {
            const members = await this.guildMembersRepository.find();
            // await Promise.all(members.map(battle => this.proccessBattles(battle.player)));
            for (let i = 0; i < members.length; i += 3) {
                const batch = members.slice(i, i + 3);
                await Promise.all(batch.map(member => this.proccessBattles(member.player)));
            }
        } catch (error) {
            console.error(`Erro ao processar batalhas: ${error}`);
        }
    }

    private async proccessBattles(battle: string): Promise<void> {
        const response = await axios.get(`https://api.splinterlands.com/battle/history2?username=${battle}&format=modern`);
        console.log(response.data);
        for (const battleData of response.data.battles) {
            await this.saveBattles(battleData);
        }
    }

    private async saveBattles(battleData: any): Promise<Battle> {
        // console.log(battleData);
        const saveBattle = new this.batleRepository({ ...battleData });
        return saveBattle.save();
    }
}
