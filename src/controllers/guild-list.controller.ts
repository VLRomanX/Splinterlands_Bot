import { Controller, Get, Post } from '@nestjs/common';
import { GuildListUseCases } from 'src/use-cases';

@Controller('api/guild/list')
export class GuildListController {
    constructor(private guildListUseCases: GuildListUseCases) { }

    @Get()
    async getAllGuildsSplintelandsApi() {
        return await this.guildListUseCases.getAllGuildList();
    }

    @Post()
    async postGuildsSplintelandsApi() {
        return await this.guildListUseCases.postGuildList();
    }
}