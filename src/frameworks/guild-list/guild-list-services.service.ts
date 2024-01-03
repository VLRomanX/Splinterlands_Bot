import { Injectable } from "@nestjs/common";
import { IGuildListServices } from "src/core";
import { GuildList, GuildListDocument } from "./model";
import axios from "axios";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class GuildListServices implements IGuildListServices {
    constructor(
        @InjectModel(GuildList.name)
        private guildListRepository: Model<GuildListDocument>
    ) { }

    async fetchAllGuildsFromAPI(): Promise<GuildList[]> {
        const response = await axios.get('https://api.splinterlands.com/guilds/list');
        return this.mapGuildsResponse(response.data.guilds);
    }

    private mapGuildsResponse(guilds: any[]): GuildList[] {
        return guilds.map(guild => ({
            id: guild.id,
            name: guild.name,
            owner: guild.owner,
            createdDate: guild.createdDate,
            membershipType: guild.membershipType,
            language: guild.language,
            description: guild.description,
            motto: guild.motto,
            level: guild.level,
            data: guild.data,
            buildings: guild.buildings,
            brawlStatus: guild.brawlStatus,
            crowns: guild.crowns,
            brawlLevel: guild.brawlLevel,
            tournamentId: guild.tournamentId,
            tournamentStatus: guild.tournamentStatus,
            tournamentData: guild.tournamentData,
            tournamentStartDate: guild.tournamentStartDate,
            numMembers: guild.numMembers,
            rating: guild.rating,
            rank: guild.rank
        }));
    }

    private async saveGuild(guildData: GuildList): Promise<GuildList> {
        const newGuild = new this.guildListRepository(guildData);
        return newGuild.save();
    }

    async saveFetchedGuilds(): Promise<GuildList[]> {
        const guilds = await this.fetchAllGuildsFromAPI();
        return Promise.all(guilds.map(guild => this.saveGuild(guild)));
    }

    async findAllGuilds(): Promise<GuildList[]> {
        return this.guildListRepository.find();
    }
}
