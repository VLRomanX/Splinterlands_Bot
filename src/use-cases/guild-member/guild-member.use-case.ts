import { Injectable } from "@nestjs/common";
import { GuildMember, IGuildMemberServices } from "src/core";

@Injectable()
export class GuildMemberUseCases {
    constructor(
        private guildMemberServices: IGuildMemberServices,
    ) { }

    async fetchAndSaveGuildMembers(): Promise<void> {
        return await this.guildMemberServices.fetchAndSaveGuildMembers();
    }

    async findAllGuildMembers(): Promise<GuildMember[]> {
        return await this.guildMemberServices.findAllGuildMembers();
    }
}