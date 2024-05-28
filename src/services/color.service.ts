import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Color} from "../entities/Color";
import {checkIfDefined} from "../utils";
import {NameModel} from "../models/name.model";

const repo = AppDataSource.getRepository(Color);

export class ColorService {
    static async getAllColors() {
        const data = await repo.find({
            select: {
                colorId: true,
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
    static async getColorById(id: number){
        const data = await repo.findOne({
            select: {
                colorId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                colorId: id,
                deletedAt: IsNull()
            }
        })

        return checkIfDefined(data)
    }

    static async createColor(model: NameModel){
        return await repo.save({
            name: model.name,
            createdAt: new Date()
        })
    }

    static async updateColor(id: number, model: NameModel){
        const data = await this.getColorById(id);
        data.name = model.name;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteColor(id: number){
        const data = await this.getColorById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}