import { GuildList } from "../entities";

export abstract class IGuildListServices {
    abstract fetchAllGuildsFromAPI(): Promise<GuildList[]>;

    abstract saveFetchedGuilds(): Promise<GuildList[]>;

    abstract findAllGuilds(): Promise<GuildList[]>;
}