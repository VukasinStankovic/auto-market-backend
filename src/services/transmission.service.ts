import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Transmission} from "../entities/Transmission";
import {checkIfDefined} from "../utils";

const repo = AppDataSource.getRepository(Transmission);

export class TransmissionService{
    static async getAllTransmission() {
        const data = await repo.find({
            select: {
                transmissionId: true,
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