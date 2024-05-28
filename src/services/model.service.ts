import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Model} from "../entities/Model";
import {checkIfDefined} from "../utils";

const repo = AppDataSource.getRepository(Model);

export class ModelService {
    static async getAllModels() {
        const data = await repo.find({
            select: {
                modelId: true,
                name: true,
                createdAt: true,
                updatedAt: true,
                brand: {
                    brandId: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                }

            },
            where: {
                brand:{
                    deletedAt: IsNull()
                },
                deletedAt: IsNull()
            },
            relations:{
                brand: true
            }
        });

        return checkIfDefined(data)
    }
}