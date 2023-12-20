import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CreateGuildListDto, GuildList, IDataServices } from "src/core";
import { GuildListFactoryService } from "./guild-list-factory.service";

@Injectable()
export class GuildListUseCases {
    constructor(
        private dataServices: IDataServices,
        private guildListFactoryService: GuildListFactoryService
    ) { }

    async getAllGuildsSplintelandsApi(): Promise<GuildList[]> {
        // Adicionar os parametros para a requisição e deixar eles não obrigatórios
        const response = await axios.get('https://game-api.splinterlands.com/guilds/list');
        return response.data.guilds;
    }

    async postGuildsSplintelandsApi(createGuildListDto: CreateGuildListDto): Promise<GuildList[]> {
        const guildsData = await this.getAllGuildsSplintelandsApi();

        const createGuildListPromisses = guildsData.map(async guildData => {
            const guild = this.guildListFactoryService.createNewGuild(guildData);
            return await this.dataServices.guilds.create(guild);
        });

        return await Promise.all(createGuildListPromisses);
    }
}