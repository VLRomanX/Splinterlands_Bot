import { Injectable } from '@nestjs/common';
import { CreateGuildMemberDto, GuildMember, UpdateGuildMemberDto } from 'src/core';

@Injectable()
export class GuildMemberFactoryService {
    createNewMember(createGuildMemberDto: CreateGuildMemberDto) {
        const newGuildMember = new GuildMember();
        newGuildMember.guildId = createGuildMemberDto.guildId;
        newGuildMember.player = createGuildMemberDto.player;
        newGuildMember.rank = createGuildMemberDto.rank;
        newGuildMember.joinDate = createGuildMemberDto.joinDate;
        newGuildMember.status = createGuildMemberDto.status;
        newGuildMember.data = createGuildMemberDto.data;
        newGuildMember.rating = createGuildMemberDto.rating;
        newGuildMember.modernRating = createGuildMemberDto.modernRating;
        newGuildMember.avatarId = createGuildMemberDto.avatarId;
        newGuildMember.titlePre = createGuildMemberDto.titlePre;
        newGuildMember.titlePost = createGuildMemberDto.titlePost;
        newGuildMember.displayName = createGuildMemberDto.displayName;
        newGuildMember.league = createGuildMemberDto.league;
        newGuildMember.modernLeague = createGuildMemberDto.modernLeague;
        newGuildMember.collectionPower = createGuildMemberDto.collectionPower;
        newGuildMember.starterPackPurchase = createGuildMemberDto.starterPackPurchase;
        newGuildMember.isOnline = createGuildMemberDto.isOnline;

        return newGuildMember;
    }

    updateGuild(updateGuildMemberDto: UpdateGuildMemberDto) {
        const newGuildMember = new GuildMember();
        newGuildMember.guildId = updateGuildMemberDto.guildId;
        newGuildMember.player = updateGuildMemberDto.player;
        newGuildMember.rank = updateGuildMemberDto.rank;
        newGuildMember.joinDate = updateGuildMemberDto.joinDate;
        newGuildMember.status = updateGuildMemberDto.status;
        newGuildMember.data = updateGuildMemberDto.data;
        newGuildMember.rating = updateGuildMemberDto.rating;
        newGuildMember.modernRating = updateGuildMemberDto.modernRating;
        newGuildMember.avatarId = updateGuildMemberDto.avatarId;
        newGuildMember.titlePre = updateGuildMemberDto.titlePre;
        newGuildMember.titlePost = updateGuildMemberDto.titlePost;
        newGuildMember.displayName = updateGuildMemberDto.displayName;
        newGuildMember.league = updateGuildMemberDto.league;
        newGuildMember.modernLeague = updateGuildMemberDto.modernLeague;
        newGuildMember.collectionPower = updateGuildMemberDto.collectionPower;
        newGuildMember.starterPackPurchase = updateGuildMemberDto.starterPackPurchase;
        newGuildMember.isOnline = updateGuildMemberDto.isOnline;

        return newGuildMember;
    }
}