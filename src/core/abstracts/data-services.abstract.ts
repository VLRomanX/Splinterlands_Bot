import { Battle } from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
    abstract battles: IGenericRepository<Battle>;
}