import { GuildList } from "../entities";

export abstract class IGuildListServices {
    abstract getAllGuildList(): Promise<GuildList[]>;

    abstract postGuildList(): Promise<GuildList[]>;
}