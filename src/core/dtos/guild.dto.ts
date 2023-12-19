import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class CreateGuildDto {
    @IsString()
    @IsNotEmpty()
    authorization: string;

    @IsString()
    @IsNotEmpty()
    sort_by: string;

    @IsString()
    @IsNotEmpty()
    language: string;

    @IsString()
    @IsNotEmpty()
    membership_type: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    username: string;
}

export class UpdateGuildDto extends PartialType(CreateGuildDto) { }
