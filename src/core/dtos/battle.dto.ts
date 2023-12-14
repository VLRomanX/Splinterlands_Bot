import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class CardDto {
    @IsNumber()
    @IsNotEmpty()
    cardDetailId: number;

    @IsString()
    @IsNotEmpty()
    cardName: string;

    @IsBoolean()
    isGold: boolean;

    @IsNumber()
    level: number;
}

class TeamDto {
    @IsString()
    @IsNotEmpty()
    playerName: string;

    @ValidateNested()
    @Type(() => CardDto)
    summonerDetails: CardDto;

    @ValidateNested({ each: true })
    @Type(() => CardDto)
    monsters: CardDto[];
}

class BattleDetailsDto {
    @IsString()
    @IsNotEmpty()
    seed: string;

    @ValidateNested()
    @Type(() => TeamDto)
    team1: TeamDto;

    @ValidateNested()
    @Type(() => TeamDto)
    team2: TeamDto;
}

export class CreateBattleDto {
    @IsString()
    @IsNotEmpty()
    battleQueueId1: string;

    @IsString()
    @IsNotEmpty()
    battleQueueId2: string;

    @IsString()
    @IsNotEmpty()
    player1Id: string;

    @IsString()
    @IsNotEmpty()
    player2Id: string;

    @IsString()
    @IsNotEmpty()
    winnerId: string;

    @IsDate()
    createdAt: Date;

    @IsNumber()
    manaCap: number;

    @IsString()
    ruleset: string;

    @IsString()
    inactive: string;

    @ValidateNested()
    @Type(() => BattleDetailsDto)
    battleDetails: BattleDetailsDto;
}

export class UpdateBattleDto extends PartialType(CreateBattleDto) { }
