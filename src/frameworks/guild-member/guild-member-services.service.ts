import { Injectable } from "@nestjs/common";
import { IGuildMemberServices } from "src/core";
import { GuildMember, GuildMemberDocument } from "./model";
import { GuildList, GuildListDocument } from "../guild-list/model";
import axios from "axios";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class GuildMemberServices implements IGuildMemberServices {
    constructor(
        @InjectModel(GuildMember.name)
        private guildMembersRepository: Model<GuildMemberDocument>,
        @InjectModel(GuildList.name)
        private guildListRepository: Model<GuildListDocument>
    ) { }

    async fetchAndSaveGuildMembers(): Promise<void> {
        try {
            const guilds = await this.guildListRepository.find();
            await Promise.all(guilds.map(guild => this.processGuildMembers(guild.id)));
        } catch (error) {
            console.error(`Erro ao processar membros das guildas: ${error}`);
        }
    }

    private async processGuildMembers(guildId: string): Promise<void> {
        try {
            await this.fetchAndSaveMembersForGuild(guildId);
        } catch (error) {
            console.error(`Erro ao salvar membros da guilda ${guildId}: ${error}`);
        }
    }

    private async fetchAndSaveMembersForGuild(guildId: string): Promise<void> {
        const response = await axios.get(`https://api.splinterlands.com/guilds/members?guild_id=${guildId}`);
        for (const memberData of response.data) {
            await this.saveGuildMembers(memberData, guildId);
        }
    }

    private async saveGuildMembers(memberData: any, guildId: string): Promise<GuildMember> {
        const newMember = new this.guildMembersRepository({ ...memberData, guildId });
        return newMember.save();
    }

    async findAllGuildMembers(): Promise<GuildMember[]> {
        return this.guildMembersRepository.find();
    }
}
