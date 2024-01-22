import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class CardDto {
    @IsString()
    @IsNotEmpty()
    uid: string;

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
    team: TeamDto;
}

export class CreateBattleDto {

    @IsString()
    @IsNotEmpty()
    battle_queue_id: string;

    @IsString()
    @IsNotEmpty()
    player1: string;

    @IsString()
    @IsNotEmpty()
    player2: string;

    @IsString()
    @IsNotEmpty()
    match_type: string;

    @IsString()
    @IsNotEmpty()
    winner: string;

    @IsNumber()
    manaCap: number;

    @IsString()
    ruleset: string[];

    @IsString()
    inactive: string[];

    @IsString()
    format: string;

    @ValidateNested()
    @Type(() => BattleDetailsDto)
    battleDetails: BattleDetailsDto;
}

export class UpdateBattleDto extends PartialType(CreateBattleDto) { }
