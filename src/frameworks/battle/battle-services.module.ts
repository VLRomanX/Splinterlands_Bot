import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IBattleServices } from "src/core";
import { DATA_BASE_CONFIGURATION } from "src/configuration";
import { Battle, BattleSchema } from "./model";
import { GuildMember, GuildMemberSchema } from "../guild-member/model";
import { BattleServices } from "./battle-services.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Battle.name, schema: BattleSchema },
            { name: GuildMember.name, schema: GuildMemberSchema },
        ]),
        MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    ],
    providers: [
        {
            provide: IBattleServices,
            useClass: BattleServices,
        },
    ],
    exports: [IBattleServices],
})
export class BattleServicesModule { }
