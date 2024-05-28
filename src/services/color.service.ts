import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Color} from "../entities/Color";
import {checkIfDefined} from "../utils";

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
}