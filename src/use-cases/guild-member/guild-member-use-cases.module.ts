import { Module } from "@nestjs/common";
import { GuildMemberFactoryService } from "./guild-member-factory.service";
import { GuildMemberUseCases } from "./guild-member.use-case";
import { GuildMemberDataServicesModule } from "src/services/guild-member-services/guild-member-services.module";

@Module({
    imports: [GuildMemberDataServicesModule],
    providers: [GuildMemberFactoryService, GuildMemberUseCases],
    exports: [GuildMemberFactoryService, GuildMemberUseCases],
})
export class GuildMemberUseCasesModule { }