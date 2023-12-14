class Card {
    cardDetailId: number;
    cardName: string;
    isGold: boolean;
    level: number;
}

class Team {
    playerName: string;
    summonerDetails: Card;
    monsters: Card[];
}

class BattleDetails {
    seed: string;
    team1: Team;
    team2: Team;
}

export class Battle {
    battleQueueId1: string;
    battleQueueId2: string;
    player1Id: string;
    player2Id: string;
    winnerId: string;
    createdAt: Date;
    manaCap: number;
    ruleset: string;
    inactive: string;
    battleDetails: BattleDetails;
}
