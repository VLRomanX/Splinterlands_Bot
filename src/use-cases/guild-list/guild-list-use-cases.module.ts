import { Module } from "@nestjs/common";
import { GuildListFactoryService } from "./guild-list-factory.service";
import { GuildListUseCases } from "./guild-list.use-case";

@Module({
    providers: [GuildListFactoryService, GuildListUseCases],
    exports: [GuildListFactoryService, GuildListUseCases],
})
export class GuildListUseCasesModule { }