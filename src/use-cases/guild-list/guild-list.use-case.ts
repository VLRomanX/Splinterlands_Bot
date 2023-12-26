import { Injectable } from "@nestjs/common";
import { CreateGuildListDto, GuildList } from "src/core";
import { GuildListFactoryService } from "./guild-list-factory.service";
import { IGuildListServices } from "../../core/abstracts";

@Injectable()
export class GuildListUseCases {
    constructor(
        private guildListServices: IGuildListServices,
        private guildListFactoryService: GuildListFactoryService,
    ) { }

    async getAllGuildList(): Promise<GuildList[]> {
        return await this.guildListServices.getAllGuildList();
    }

    async postGuildList(): Promise<GuildList[]> {
        return await this.guildListServices.postGuildList();

    }
}