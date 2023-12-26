import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
    private _repository: Model<T>;
    private _populateOnFind: string[];

    constructor(repository: Model<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    async getAll(): Promise<T[]> {
        return await this._repository.find().populate(this._populateOnFind).exec();
    }

    async get(id: string): Promise<T> {
        return await this._repository.findById(id).populate(this._populateOnFind).exec() as T;
    }

    async post(item: T): Promise<T> {
        return await this._repository.create(item);
    }

    async update(id: any, item: T): Promise<T> {
        return this._repository.findByIdAndUpdate(id, item);
    }
}