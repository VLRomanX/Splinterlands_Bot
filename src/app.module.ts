import { Module } from "@nestjs/common";
import { BattleController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { BattleUseCasesModule } from "./use-cases";

@Module({
  imports: [DataServicesModule, BattleUseCasesModule],
  controllers: [BattleController],
  providers: [],
})
export class AppModule { }