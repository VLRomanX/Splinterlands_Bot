export class GuildMember {
    guildId: string;
    player: string;
    rank: number;
    joinDate: Date;
    status: string;
    data: any;
    rating: number;
    modernRating: number;
    avatarId: number;
    titlePre: string | null;
    titlePost: string | null;
    displayName: string | null;
    league: number;
    modernLeague: number;
    collectionPower: number;
    starterPackPurchase: boolean;
    isOnline: boolean;
}