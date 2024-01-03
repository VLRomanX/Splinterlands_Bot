import { GuildMember } from "../entities";

export abstract class IGuildMemberServices {
    abstract fetchAndSaveGuildMembers(): Promise<void>;

    abstract findAllGuildMembers(): Promise<GuildMember[]>;
}