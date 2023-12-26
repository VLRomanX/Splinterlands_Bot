export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;

    abstract get(id: string): Promise<T>;

    abstract post(item: T): Promise<T>;

    abstract update(id: string, item: T);
}