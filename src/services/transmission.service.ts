import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Transmission} from "../entities/Transmission";
import {checkIfDefined} from "../utils";
import {NameModel} from "../models/name.model";

const repo = AppDataSource.getRepository(Transmission);

export class TransmissionService{
    static async getAllTransmission() {
        const data = await repo.find({
            select: {
                transmissionId: true,
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
    static async getTransmissionById(id: number){
        const data = await repo.findOne({
            select: {
                transmissionId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                transmissionId: id,
                deletedAt: IsNull()
            }
        })

        return checkIfDefined(data)
    }

    static async createTransmission(model: NameModel){
        return await repo.save({
            name: model.name,
            createdAt: new Date()
        })
    }

    static async updateTransmission(id: number, model: NameModel){
        const data = await this.getTransmissionById(id);
        data.name = model.name;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteTransmission(id: number){
        const data = await this.getTransmissionById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}