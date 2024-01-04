import { Module } from "@nestjs/common";
import { BattleController, GuildListController, GuildMemberController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { BattleUseCasesModule, GuildListUseCasesModule, GuildMemberUseCasesModule } from "./use-cases";
import { GuildListDataServicesModule } from "./services/guild-list-services/guild-list-services.module";
import { GuildMemberDataServicesModule } from "./services/guild-member-services/guild-member-services.module";

@Module({
  imports: [DataServicesModule, BattleUseCasesModule, GuildListUseCasesModule, GuildMemberUseCasesModule ,GuildListDataServicesModule, GuildMemberDataServicesModule],
  controllers: [BattleController, GuildListController, GuildMemberController],
  providers: [],
})
export class AppModule { }