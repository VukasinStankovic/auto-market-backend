import {AppDataSource} from "../db";
import {Color} from "../entities/Color";
import {IsNull} from "typeorm";
import {Equipment} from "../entities/Equipment";
import {checkIfDefined} from "../utils";

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
}