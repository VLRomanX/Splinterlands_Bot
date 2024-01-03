import { Controller, Get, Post } from '@nestjs/common';
import { GuildListUseCases } from 'src/use-cases';

@Controller('api/guild/list')
export class GuildListController {
    constructor(private guildListUseCases: GuildListUseCases) { }

    @Get()
    async fetchAllGuildsFromAPI() {
        return await this.guildListUseCases.fetchAllGuildsFromAPI();
    }

    @Post()
    async saveFetchedGuilds() {
        return await this.guildListUseCases.saveFetchedGuilds();
    }

    @Get()
    async findAllGuilds() {
        return await this.guildListUseCases.findAllGuilds();
    }

    @Post()
    async fetchAndSaveGuildMembers() {
        return await this.guildListUseCases.fetchAndSaveGuildMembers();
    }

    @Get()
    async findAllGuildMembers() {
        return await this.guildListUseCases.findAllGuildMembers();
    }
}