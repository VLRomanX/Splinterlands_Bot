import { Injectable } from '@nestjs/common';
import { CreateGuildListDto, GuildList, UpdateGuildListDto } from 'src/core';

@Injectable()
export class GuildListFactoryService {
    createNewGuild(createGuildListDto: CreateGuildListDto) {
        const newGuildList = new GuildList();
        newGuildList.id = createGuildListDto.id;
        newGuildList.name = createGuildListDto.name;
        newGuildList.owner = createGuildListDto.owner;
        newGuildList.createdDate = createGuildListDto.createdDate;
        newGuildList.membershipType = createGuildListDto.membershipType;
        newGuildList.language = createGuildListDto.language;
        newGuildList.description = createGuildListDto.description;
        newGuildList.motto = createGuildListDto.motto;
        newGuildList.level = createGuildListDto.level;
        newGuildList.data = createGuildListDto.data;
        newGuildList.buildings = createGuildListDto.buildings;
        newGuildList.brawlStatus = createGuildListDto.brawlStatus;
        newGuildList.crowns = createGuildListDto.crowns;
        newGuildList.brawlLevel = createGuildListDto.brawlLevel;
        newGuildList.tournamentId = createGuildListDto.tournamentId;
        newGuildList.tournamentStatus = createGuildListDto.tournamentStatus;
        newGuildList.tournamentData = createGuildListDto.tournamentData;
        newGuildList.tournamentStartDate = createGuildListDto.tournamentStartDate;
        newGuildList.numMembers = createGuildListDto.numMembers;
        newGuildList.rating = createGuildListDto.rating;
        newGuildList.rank = createGuildListDto.rank;

        return newGuildList;
    }

    updateGuild(updateGuildDto: UpdateGuildListDto) {
        const newGuildList = new GuildList();
        newGuildList.id = updateGuildDto.id;
        newGuildList.name = updateGuildDto.name;
        newGuildList.owner = updateGuildDto.owner;
        newGuildList.createdDate = updateGuildDto.createdDate;
        newGuildList.membershipType = updateGuildDto.membershipType;
        newGuildList.language = updateGuildDto.language;
        newGuildList.description = updateGuildDto.description;
        newGuildList.motto = updateGuildDto.motto;
        newGuildList.level = updateGuildDto.level;
        newGuildList.data = updateGuildDto.data;
        newGuildList.buildings = updateGuildDto.buildings;
        newGuildList.brawlStatus = updateGuildDto.brawlStatus;
        newGuildList.crowns = updateGuildDto.crowns;
        newGuildList.brawlLevel = updateGuildDto.brawlLevel;
        newGuildList.tournamentId = updateGuildDto.tournamentId;
        newGuildList.tournamentStatus = updateGuildDto.tournamentStatus;
        newGuildList.tournamentData = updateGuildDto.tournamentData;
        newGuildList.tournamentStartDate = updateGuildDto.tournamentStartDate;
        newGuildList.numMembers = updateGuildDto.numMembers;
        newGuildList.rating = updateGuildDto.rating;
        newGuildList.rank = updateGuildDto.rank;

        return newGuildList;
    }
}