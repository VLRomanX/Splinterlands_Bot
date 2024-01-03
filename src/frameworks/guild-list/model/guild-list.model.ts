import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type GuildListDocument = GuildList & Document;

@Schema()
export class GuildList {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    owner: string;

    @Prop()
    createdDate: Date;

    @Prop()
    membershipType: string;

    @Prop()
    language: string;

    @Prop()
    description: string;

    @Prop()
    motto: string;

    @Prop()
    level: number;

    @Prop({ type: mongoose.Schema.Types.Mixed })
    data: any;

    @Prop({ type: mongoose.Schema.Types.Mixed })
    buildings: any;

    @Prop()
    brawlStatus: number;

    @Prop()
    crowns: number;

    @Prop()
    brawlLevel: number;

    @Prop()
    tournamentId: string;

    @Prop()
    tournamentStatus: number;

    @Prop({ type: mongoose.Schema.Types.Mixed })
    tournamentData: any;

    @Prop()
    tournamentStartDate: Date;

    @Prop()
    numMembers: string;

    @Prop()
    rating: string;

    @Prop()
    rank: string;
}

export const GuildListSchema = SchemaFactory.createForClass(GuildList);