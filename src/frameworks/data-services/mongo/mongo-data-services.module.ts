import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IDataServices } from "src/core";
import { DATA_BASE_CONFIGURATION } from "src/configuration";
import { Battle, BattleSchema } from "./model/battle.model";
import { MongoDataServices } from "./mongo-data-services.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Battle.name, schema: BattleSchema }]),
        MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    ],
    providers: [
        {
            provide: IDataServices,
            useClass: MongoDataServices,
        },
    ],
    exports: [IDataServices],
})
export class MongoDataServicesModule { }
console.log(DATA_BASE_CONFIGURATION.mongoConnectionString);
