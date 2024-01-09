import { Module } from "@nestjs/common";
import { BattleFactoryService } from "./battle-factory.service";
import { BattleUseCases } from "./battle.use-case";
import { BattleDataServicesModule } from "src/services/battle-services/battle-services.module";

@Module({
    imports: [BattleDataServicesModule],
    providers: [BattleFactoryService, BattleUseCases],
    exports: [BattleFactoryService, BattleUseCases],
})
export class BattleUseCasesModule { }