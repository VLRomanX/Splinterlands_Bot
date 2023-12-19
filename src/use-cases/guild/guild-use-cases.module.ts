import { Module } from "@nestjs/common";
import { GuildFactoryService } from "./guild-factory.service";
import { GuildUseCases } from "./guild.use-case"
import { DataServicesModule } from "src/services/data-services/data-services.module";

@Module({
    imports: [DataServicesModule],
    providers: [GuildFactoryService, GuildUseCases],
    exports: [GuildFactoryService, GuildUseCases],
})
export class GuildUseCasesModule { }