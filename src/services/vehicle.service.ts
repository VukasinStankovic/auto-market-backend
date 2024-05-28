import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Vehicle} from "../entities/Vehicle";
import {isNull} from "util";
import {checkIfDefined} from "../utils";

const repo = AppDataSource.getRepository(Vehicle);

export class VehicleService {
    static async getAllVehicles() {
        const data = await repo.find({
            select: {
                vehicleId: true,
                name: true,
                price: true,
                mileage: true,
                productionYear: true,
                createdAt: true,
                updatedAt: true,
                transmission: {
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
                fuelType: {
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
                model: {
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                    brand: {
                        name: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                },
                body: {
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
                color: {
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
                user: {
                    username: true,
                },
                vehicleEquipments: {
                    equipmentId: true
                },
                vehicleImages: {
                    imageId: true
                },
            },
            where: {
                deletedAt: IsNull(),
                transmission: {
                    deletedAt: IsNull()
                },
                body: {
                    deletedAt: IsNull()
                },
                fuelType: {
                    deletedAt: IsNull()
                },
                model: {
                    deletedAt: IsNull(),
                    brand: {
                        deletedAt: IsNull()
                    }
                },
                color: {
                    deletedAt: IsNull()
                },
                vehicleEquipments: {
                    deletedAt: IsNull()
                },
                vehicleImages: {
                    deletedAt: IsNull()
                }
            },
            relations: {
                fuelType: true,
                model: {
                    brand: true
                },
                body: true,
                color: true,
                user: true,
                transmission: true,
                vehicleEquipments: true,
                vehicleImages: true,
            }
        });

        return checkIfDefined(data)
    }
}