import {AppDataSource} from "../db";
import {Color} from "../entities/Color";
import {IsNull} from "typeorm";
import {Equipment} from "../entities/Equipment";
import {checkIfDefined} from "../utils";
import {NameModel} from "../models/name.model";

const repo = AppDataSource.getRepository(Equipment);

export class EquipmentService {
    static async getAllEquipment() {
        const data = await repo.find({
            select: {
                equipmentId: true,
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
    static async getEquipmentById(id: number){
        const data = await repo.findOne({
            select: {
                equipmentId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                equipmentId: id,
                deletedAt: IsNull()
            }
        })

        return checkIfDefined(data)
    }

    static async createEquipment(model: NameModel){
        return await repo.save({
            name: model.name,
            createdAt: new Date()
        })
    }

    static async updateEquipment(id: number, model: NameModel){
        const data = await this.getEquipmentById(id);
        data.name = model.name;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteEquipment(id: number){
        const data = await this.getEquipmentById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}