import { Injectable } from "@nestjs/common";
import { GuildList, IGuildListServices } from "src/core";

@Injectable()
export class GuildListUseCases {
    constructor(
        private guildListServices: IGuildListServices,
    ) { }

    async fetchAllGuildsFromAPI(): Promise<GuildList[]> {
        return await this.guildListServices.fetchAllGuildsFromAPI();
    }

    async saveFetchedGuilds(): Promise<GuildList[]> {
        return await this.guildListServices.saveFetchedGuilds();
    }

    async findAllGuilds(): Promise<GuildList[]> {
        return await this.guildListServices.findAllGuilds();
    }
}