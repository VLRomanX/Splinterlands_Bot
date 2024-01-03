import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type GuildMemberDocument = GuildMember & Document;

@Schema()
export class GuildMember {

    @Prop()
    guildId: string;

    @Prop()
    player: string;

    @Prop()
    rank: number;

    @Prop()
    joinDate: Date;

    @Prop()
    status: string;

    @Prop({ type: mongoose.Schema.Types.Mixed })
    data: any;

    @Prop()
    rating: number;

    @Prop()
    modernRating: number;

    @Prop()
    avatarId: number;

    @Prop()
    titlePre: string | null;

    @Prop()
    titlePost: string | null;

    @Prop()
    displayName: string | null;

    @Prop()
    league: number;

    @Prop()
    modernLeague: number;

    @Prop()
    collectionPower: number;

    @Prop()
    starterPackPurchase: boolean;

    @Prop()
    isOnline: boolean;
}

export const GuildMemberSchema = SchemaFactory.createForClass(GuildMember);