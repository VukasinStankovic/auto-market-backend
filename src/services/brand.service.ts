import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Brand} from "../entities/Brand";
import {checkIfDefined} from "../utils";

const repo = AppDataSource.getRepository(Brand);

export class BrandService {
    static async getAllBrands() {
        const data = await repo.find({
            select: {
                brandId: true,
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