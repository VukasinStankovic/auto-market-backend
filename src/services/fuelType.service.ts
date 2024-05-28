import {AppDataSource} from "../db";
import {Color} from "../entities/Color";
import {IsNull} from "typeorm";
import {FuelType} from "../entities/FuelType";
import {checkIfDefined} from "../utils";

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
}