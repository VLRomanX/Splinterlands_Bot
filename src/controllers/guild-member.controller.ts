import { Controller, Get, Post } from '@nestjs/common';
import { GuildMemberUseCases } from 'src/use-cases';

@Controller('api/guild/member')
export class GuildMemberController {
    constructor(private guildMemberUseCases: GuildMemberUseCases) { }

    @Post()
    async fetchAndSaveGuildMembers() {
        return await this.guildMemberUseCases.fetchAndSaveGuildMembers();
    }

    @Get()
    async findAllGuildMembers() {
        return await this.guildMemberUseCases.findAllGuildMembers();
    }
}