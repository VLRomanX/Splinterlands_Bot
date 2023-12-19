import { Injectable } from '@nestjs/common';
import { Guild, CreateGuildDto, UpdateGuildDto } from 'src/core';

@Injectable()
export class GuildFactoryService {
    createNewGuild(createGuildDto: CreateGuildDto) {
        const newGuild = new Guild();
        newGuild.authorization = createGuildDto.authorization;
        newGuild.sort_by = createGuildDto.sort_by;
        newGuild.language = createGuildDto.language;
        newGuild.membership_type = createGuildDto.membership_type;
        newGuild.name = createGuildDto.name;
        newGuild.username = createGuildDto.username;

        return newGuild;
    }

    updateGuild(updateGuildDto: UpdateGuildDto) {
        const newGuild = new Guild();
        newGuild.authorization = updateGuildDto.authorization;
        newGuild.sort_by = updateGuildDto.sort_by;
        newGuild.language = updateGuildDto.language;
        newGuild.membership_type = updateGuildDto.membership_type;
        newGuild.name = updateGuildDto.name;
        newGuild.username = updateGuildDto.username;

        return newGuild;
    }
}