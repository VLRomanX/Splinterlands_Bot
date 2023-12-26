import { Module } from "@nestjs/common";
import { BattleController, GuildListController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { BattleUseCasesModule, GuildListUseCasesModule } from "./use-cases";

@Module({
  imports: [DataServicesModule, BattleUseCasesModule, GuildListUseCasesModule],
  controllers: [BattleController, GuildListController],
  providers: [],
})
export class AppModule { }