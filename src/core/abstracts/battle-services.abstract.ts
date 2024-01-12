export abstract class IBattleServices {
    abstract fetchAndSaveBattles(): Promise<void>;

    abstract findBattlesByCombinatorialCriteria(manaCap: number, ruleset: string, inactive: string): Promise<any>;
}