import {AppDataSource} from "../db";
import {Body} from "../entities/Body";
import {IsNull} from "typeorm";
import {checkIfDefined} from "../utils";
import {NameModel} from "../models/name.model";

const repo = AppDataSource.getRepository(Body);

export class BodyService {
    static async getAll() {
        const data = await repo.find({
            select: {
                bodyId: true,
                name: true,
                createdAt: true,
                updatedAt: true
            },
            where: {
                deletedAt: IsNull()
            },
        });
        return checkIfDefined(data)
    }

    // TODO: proveriti da li sve metode rade ispravno
    static async getBodyById(id: number){
        const data = await repo.findOne({
            select: {
                bodyId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                bodyId: id,
                deletedAt: IsNull()
            }
        })

        return checkIfDefined(data)
    }

    static async createBody(model: NameModel){
        return await repo.save({
            name: model.name,
            createdAt: new Date()
        })
    }

    static async updateBody(id: number, model: NameModel){
        const data = await this.getBodyById(id);
        data.name = model.name;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteBody(id: number){
        const data = await this.getBodyById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}