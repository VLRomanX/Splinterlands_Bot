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
    team: Team;
}

export class Battle {
    player1: string;
    player2: string;
    match_type: string;
    winner: string;
    manaCap: number;
    ruleset: string[];
    inactive: string[];
    format: string;
    battleDetails: BattleDetails;
}
