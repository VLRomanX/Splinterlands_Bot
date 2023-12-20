import { PartialType } from '@nestjs/mapped-types';

export class CreateGuildListDto {
    id: string;
    name: string;
    owner: string;
    createdDate: Date;
    membershipType: string;
    language: string;
    description: string;
    motto: string;
    level: number;
    data: any;
    buildings: any;
    brawlStatus: number;
    crowns: number;
    brawlLevel: number;
    tournamentId: string;
    tournamentStatus: number;
    tournamentData: any;
    tournamentStartDate: Date;
    numMembers: string;
    rating: string;
    rank: string;
}

export class UpdateGuildListDto extends PartialType(CreateGuildListDto) { }
