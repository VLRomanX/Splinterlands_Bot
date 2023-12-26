import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IDataServices } from "src/core";
import { DATA_BASE_CONFIGURATION } from "src/configuration";
import { GuildList, GuildListSchema } from "./model";
import { SplinterlandsDataServices } from "./splinterlands-data-services.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: GuildList.name, schema: GuildListSchema },
        ]),
        MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    ],
    providers: [
        {
            provide: IDataServices,
            useClass: SplinterlandsDataServices,
        },
    ],
    exports: [IDataServices],
})
export class SplinterlandsDataServicesModule { }
