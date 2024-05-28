import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Model} from "../entities/Model";
import {checkIfDefined} from "../utils";
import {ModelModel} from "../models/model.model";

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

    // TODO: proveriti da li sve metode rade ispravno
    static async getModelById(id: number){
        const data = await repo.findOne({
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
                modelId: id,
                brand:{
                    deletedAt: IsNull()
                },
                deletedAt: IsNull()
            },
            relations: {
                brand: true
            }
        })

        return checkIfDefined(data)
    }

    static async createModel(model: ModelModel){
        return await repo.save({
            name: model.name,
            brandId: model.brandId,
            createdAt: new Date()
        })
    }

    static async updateModel(id: number, model: ModelModel){
        const data = await this.getModelById(id);
        data.name = model.name;
        data.brandId = model.brandId;
        data.updatedAt = new Date();
        return await repo.save(data)
    }

    static async deleteModel(id: number){
        const data = await this.getModelById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}