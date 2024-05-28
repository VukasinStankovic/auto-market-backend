import {AppDataSource} from "../db";
import {Body} from "../entities/Body";
import {IsNull} from "typeorm";
import {checkIfDefined} from "../utils";

const repo = AppDataSource.getRepository(Body);

export class BodyService {
    static async getAll() {
        const data = await repo.find({
            select: {
                bodyId: true,
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