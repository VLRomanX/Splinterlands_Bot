import { Module } from "@nestjs/common";
import { GuildListFactoryService } from "./guild-list-factory.service";
import { GuildListUseCases } from "./guild-list.use-case";
import { DataServicesModule } from "src/services/data-services/data-services.module";

@Module({
    imports: [DataServicesModule],
    providers: [GuildListFactoryService, GuildListUseCases],
    exports: [GuildListFactoryService, GuildListUseCases],
})
export class GuildListUseCasesModule { }