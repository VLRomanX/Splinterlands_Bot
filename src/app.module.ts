import { Module } from "@nestjs/common";
import { BattleController, GuildListController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { BattleUseCasesModule, GuildListUseCasesModule } from "./use-cases";
import { SplinterlandsServicesModule } from "./services/splinterlands-services/splinterlands-services.module";

@Module({
  imports: [DataServicesModule, BattleUseCasesModule, GuildListUseCasesModule, SplinterlandsServicesModule],
  controllers: [BattleController, GuildListController],
  providers: [],
})
export class AppModule { }