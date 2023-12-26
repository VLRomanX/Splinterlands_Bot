import { Injectable } from "@nestjs/common";
import { IGuildListServices } from "src/core";
import { GuildList, GuildListDocument } from "./model";
import axios from "axios";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class SplinterlandsDataServices implements IGuildListServices {
    constructor(
        @InjectModel(GuildList.name)
        private guildListRepository: Model<GuildListDocument>
    ) { }

    async getAllGuildList(): Promise<GuildList[]> {
        const response = await axios.get('https://api.splinterlands.com/guilds/list')
        return response.data.guilds.map(guild => ({
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
        const newGuildList = new this.guildListRepository(guildData);
        return await newGuildList.save();
    }

    async postGuildList(): Promise<GuildList[]> {
        const guilds = await this.getAllGuildList();
        const savedGuilds = await Promise.all(guilds.map(guild => this.saveGuild(guild)));
        return savedGuilds;
    }
}