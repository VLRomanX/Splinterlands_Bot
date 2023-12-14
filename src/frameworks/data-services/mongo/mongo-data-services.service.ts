import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDataServices } from "src/core";
import { MongoGenericRepository } from "./mongo-generic-repository";
import { Battle, BattleDocument } from "./model";

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    battles: MongoGenericRepository<Battle>;

    constructor(@InjectModel(Battle.name) private BattleRepository: Model<BattleDocument>) { }

    onApplicationBootstrap() {
        this.battles = new MongoGenericRepository<Battle>(this.BattleRepository);
    }
}