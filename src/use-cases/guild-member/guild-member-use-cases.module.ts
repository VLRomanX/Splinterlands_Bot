import { Module } from "@nestjs/common";
import { GuildListFactoryService } from "./guild-member-factory.service";
import { GuildListUseCases } from "./guild-member.use-case";
import { SplinterlandsServicesModule } from "src/services/splinterlands-services/splinterlands-services.module";

@Module({
    imports: [SplinterlandsServicesModule],
    providers: [GuildListFactoryService, GuildListUseCases],
    exports: [GuildListFactoryService, GuildListUseCases],
})
export class GuildListUseCasesModule { }