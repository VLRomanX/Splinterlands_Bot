import { Module } from "@nestjs/common";
import { BattleController, GuildController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { BattleUseCasesModule, GuildUseCasesModule } from "./use-cases";

@Module({
  imports: [DataServicesModule, BattleUseCasesModule, GuildUseCasesModule],
  controllers: [BattleController, GuildController],
  providers: [],
})
export class AppModule { }