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
        for (const battleData of response.data.battles) {
            await this.saveBattles(battleData);
        }
    }

    private async saveBattles(battleData: any): Promise<Battle> {
        const existingBattle = await this.batleRepository.findOne({ 'battleDetails.seed': battleData.details.seed });

        if (existingBattle) {
            console.log(`Batalha com seed ${battleData.details.seed} já existe. Não será salva novamente.`);
            return null;
        }

        const rulesetArray = battleData.ruleset.split('|');
        const inactiveArray = battleData.inactive ? battleData.inactive.split(',') : [];

        const battle = new this.batleRepository({
            player1: battleData.player_1,
            player2: battleData.player_2,
            match_type: battleData.match_type,
            winner: battleData.winner,
            manaCap: battleData.mana_cap,
            ruleset: rulesetArray,
            inactive: inactiveArray,
            format: battleData.format,
            battleDetails: {
                seed: battleData.details.seed,
                team: {
                    playerName: battleData.details.winner === battleData.player1 ? battleData.details.team1.player : battleData.details.team2.player,
                    summonerDetails: {
                        cardDetailId: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.card_detail_id : battleData.details.team2.summoner.card_detail_id,
                        cardName: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.name : battleData.details.team2.summoner.name,
                        isGold: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.gold : battleData.details.team2.summoner.gold,
                        level: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.level : battleData.details.team2.summoner.level,
                    },
                    monsters: battleData.details.winner === battleData.player1 ?
                        battleData.details.team1.monsters.map(monster => ({
                            cardDetailId: monster.card_detail_id,
                            cardName: monster.name,
                            isGold: monster.gold,
                            level: monster.level,
                        })) :
                        battleData.details.team2.monsters.map(monster => ({
                            cardDetailId: monster.card_detail_id,
                            cardName: monster.name,
                            isGold: monster.gold,
                            level: monster.level,
                        })),
                },
            },
        });

        return battle.save();
    }

    async findBattlesByCombinatorialCriteria(manaCap: number, ruleset: string, inactive: string): Promise<Battle[]> {
        const rulesetArray = ruleset.split('|');
        const inactiveArray = inactive.split(',');

        return this.batleRepository.find({
            manaCap: manaCap,
            ruleset: { $in: rulesetArray },
            inactive: { $in: inactiveArray }
        });
    }
}
