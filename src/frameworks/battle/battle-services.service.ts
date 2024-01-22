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
            for (let member of members) {
                await this.processBattles(member.player);
                await new Promise(resolve => setTimeout(resolve, 40)); // Pausa de 40 ms entre cada requisição
            }
        } catch (error) {
            console.error(`Erro geral ao buscar ou salvar batalhas: ${error.message}`);
        }
    }

    private async processBattles(player: string, attempt = 1): Promise<void> {
        const initialWaitTime = 300000; // 5 minutos em milissegundos
        const waitTime = initialWaitTime * attempt; // Aumenta 5 minutos a cada tentativa

        try {
            const response = await axios.get(`https://api.splinterlands.com/battle/history2?username=${player}&format=modern`);
            if (response.data && response.data.battles) {
                for (const battleData of response.data.battles) {
                    if (battleData.details && battleData.details.seed) {
                        await this.saveBattles(battleData);
                    } else {
                        console.log(`Dados inválidos para o jogador ${player}. Detalhes da batalha: ${JSON.stringify(battleData)}`);
                    }
                }
            } else {
                console.log(`Resposta da API inválida ou sem dados de batalha para o jogador ${player}.`);
            }
        } catch (error) {
            console.log(`Tentativa ${attempt} falhou para o jogador ${player}, tentando novamente após ${(waitTime / 60000)} minutos`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            return this.processBattles(player, attempt + 1);
        }
    }


    private async saveBattles(battleData: any): Promise<Battle> {
        try {
            const battleQueueId = battleData.details.winner === battleData.player1 ? battleData.battle_queue_id_1 : battleData.battle_queue_id_2;
            const existingBattle = await this.batleRepository.findOne({ battle_queue_id: battleQueueId });

            if (existingBattle) {
                console.log(`Batalha com battle_queue_id ${battleQueueId} para o jogador ${battleData.player_1} ou ${battleData.player_2} já existe. Não será salva novamente.`);
                return null;
            }

            const rulesetArray = battleData.ruleset.split('|');
            const inactiveArray = battleData.inactive ? battleData.inactive.split(',') : [];


            const battle = new this.batleRepository({
                battle_queue_id: battleQueueId,
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
                            uid: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.uid : battleData.details.team2.summoner.uid,
                            cardDetailId: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.card_detail_id : battleData.details.team2.summoner.card_detail_id,
                            cardName: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.name : battleData.details.team2.summoner.name,
                            isGold: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.gold : battleData.details.team2.summoner.gold,
                            level: battleData.details.winner === battleData.player1 ? battleData.details.team1.summoner.level : battleData.details.team2.summoner.level,
                        },
                        monsters: battleData.details.winner === battleData.player1 ?
                            battleData.details.team1.monsters.map(monster => ({
                                uid: monster.uid,
                                cardDetailId: monster.card_detail_id,
                                cardName: monster.name,
                                isGold: monster.gold,
                                level: monster.level,
                            })) :
                            battleData.details.team2.monsters.map(monster => ({
                                uid: monster.uid,
                                cardDetailId: monster.card_detail_id,
                                cardName: monster.name,
                                isGold: monster.gold,
                                level: monster.level,
                            })),
                    },
                },
            });

            return battle.save();

        } catch (error) {
            console.error(`Erro ao salvar dados da batalha: ${error.message}`);
            return null;
        }
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
