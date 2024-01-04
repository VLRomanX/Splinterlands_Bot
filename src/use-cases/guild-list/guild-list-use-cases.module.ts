import { Module } from "@nestjs/common";
import { GuildListFactoryService } from "./guild-list-factory.service";
import { GuildListUseCases } from "./guild-list.use-case";
import { GuildListDataServicesModule } from "src/services/guild-list-services/guild-list-services.module";

@Module({
    imports: [GuildListDataServicesModule],
    providers: [GuildListFactoryService, GuildListUseCases],
    exports: [GuildListFactoryService, GuildListUseCases],
})
export class GuildListUseCasesModule { }