import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IGuildMemberServices } from "src/core";
import { DATA_BASE_CONFIGURATION } from "src/configuration";
import { GuildMember, GuildMemberSchema } from "./model";
import { GuildMemberServices } from "./guild-member-services.service";
import { GuildList, GuildListSchema } from "../guild-list/model";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: GuildMember.name, schema: GuildMemberSchema },
            { name: GuildList.name, schema: GuildListSchema },
        ]),
        MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    ],
    providers: [
        {
            provide: IGuildMemberServices,
            useClass: GuildMemberServices,
        },
    ],
    exports: [IGuildMemberServices],
})
export class GuildMemberServicesModule { }
