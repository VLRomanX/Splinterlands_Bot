import { Module } from "@nestjs/common";
import { BattleFactoryService } from "./battle-factory.service";
import { BattleUseCases } from "./battle.use-case";
import { DataServicesModule } from "src/services/data-services/data-services.module";

@Module({
    imports: [DataServicesModule],
    providers: [BattleFactoryService, BattleUseCases],
    exports: [BattleFactoryService, BattleUseCases],
})
export class BattleUseCasesModule { }