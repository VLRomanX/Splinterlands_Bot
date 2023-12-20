import { Controller, Get } from '@nestjs/common';
import { GuildUseCases } from 'src/use-cases';

@Controller('api/guild')
export class GuildController {
    constructor(private guildUseCases: GuildUseCases) { }

    @Get('list')
    async getAllGuildsSplintelandsApi() {
        return await this.guildUseCases.getAllGuildsSplintelandsApi();
    }

    @Get('members')
    async getMembersGuildSplintelandsApi() {
        return await this.guildUseCases.getMembersGuildSplintelandsApi();
    }
}