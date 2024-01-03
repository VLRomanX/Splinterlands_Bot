import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IGuildListServices } from "src/core";
import { DATA_BASE_CONFIGURATION } from "src/configuration";
import { GuildList, GuildListSchema } from "./model";
import { GuildListServices } from "./guild-list-services.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: GuildList.name, schema: GuildListSchema },
        ]),
        MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    ],
    providers: [
        {
            provide: IGuildListServices,
            useClass: GuildListServices,
        },
    ],
    exports: [IGuildListServices],
})
export class GuildListServicesModule { }
