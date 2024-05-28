import {AppDataSource} from "../db";
import {Color} from "../entities/Color";
import {IsNull} from "typeorm";
import {User} from "../entities/User";
import {checkIfDefined} from "../utils";

const repo = AppDataSource.getRepository(User);

export class UserService{
    static async getAllUsers() {
        const data = await repo.find({
            select: {
                userId: true,
                username: true,
                active: true,
                createdAt: true,
                updatedAt: true
            },
            where: {
                active: true
            },
        });

        return checkIfDefined(data)
    }
}