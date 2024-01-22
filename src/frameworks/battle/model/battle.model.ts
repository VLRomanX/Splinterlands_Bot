import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BattleDocument = Battle & Document;

class Card {
    @Prop({ required: true })
    uid: string;

    @Prop({ required: true })
    cardDetailId: number;

    @Prop({ required: true })
    cardName: string;

    @Prop({ required: true })
    isGold: boolean;

    @Prop({ required: true })
    level: number;
}

class Team {
    @Prop({ required: true })
    playerName: string;

    @Prop({ type: Card, required: true })
    summonerDetails: Card;

    @Prop({ type: [Card], required: true })
    monsters: Card[];
}

class BattleDetails {
    @Prop({ required: true })
    seed: string;

    @Prop({ type: Team, required: true })
    team1: Team;

    @Prop({ type: Team, required: true })
    team2: Team;
}

@Schema()
export class Battle {
    @Prop({ required: true })
    battle_queue_id: string;

    @Prop({ required: true })
    player1: string;

    @Prop({ required: true })
    player2: string;

    @Prop({ required: true })
    match_type: string;

    @Prop({ required: true })
    winner: string;

    @Prop({ required: true })
    manaCap: number;

    @Prop({ type: [String] })
    ruleset: string[];

    @Prop({ type: [String] })
    inactive: string[];

    @Prop({ required: true })
    format: string;

    @Prop({ type: BattleDetails, required: true })
    battleDetails: BattleDetails;
}

export const BattleSchema = SchemaFactory.createForClass(Battle);