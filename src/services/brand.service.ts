import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Brand} from "../entities/Brand";
import {checkIfDefined} from "../utils";
import {NameModel} from "../models/name.model";

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

    static async getBrandById(id: number){
        const data = await repo.findOne({
            select: {
                brandId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                brandId: id,
                deletedAt: IsNull()
            }
        })

        return checkIfDefined(data)
    }

    static async createBrand(model: NameModel){
        return await repo.save({
            name: model.name,
            createdAt: new Date()
        })
    }

    static async updateBrand(id: number, model: NameModel){
        const data = await this.getBrandById(id);
        data.name = model.name;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteBrand(id: number){
        const data = await this.getBrandById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}