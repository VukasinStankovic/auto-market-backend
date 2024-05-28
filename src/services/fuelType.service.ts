import {AppDataSource} from "../db";
import {Color} from "../entities/Color";
import {IsNull} from "typeorm";
import {FuelType} from "../entities/FuelType";
import {checkIfDefined} from "../utils";
import {NameModel} from "../models/name.model";

const repo = AppDataSource.getRepository(FuelType);

export class FuelTypeService {
    static async getAllFuelTypes() {
        const data = await repo.find({
            select: {
                fuelTypeId: true,
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
    static async getFuelTypeById(id: number){
        const data = await repo.findOne({
            select: {
                fuelTypeId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                fuelTypeId: id,
                deletedAt: IsNull()
            }
        })

        return checkIfDefined(data)
    }

    static async createFuelType(model: NameModel){
        return await repo.save({
            name: model.name,
            createdAt: new Date()
        })
    }

    static async updateFuelType(id: number, model: NameModel){
        const data = await this.getFuelTypeById(id);
        data.name = model.name;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteFuelType(id: number){
        const data = await this.getFuelTypeById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}