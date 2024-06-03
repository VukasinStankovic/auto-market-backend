import {AppDataSource} from "../db";
import {IsNull} from "typeorm";
import {Vehicle} from "../entities/Vehicle";
import {checkIfDefined} from "../utils";
import {VehicleModel} from "../models/vehicle.model";

const repo = AppDataSource.getRepository(Vehicle);

export class VehicleService {
    static async getAllVehicles() {
        const data = await repo.find({
            select: {
                vehicleId: true,
                name: true,
                numberOfDoors: true,
                numberOfSeats: true,
                price: true,
                mileage: true,
                productionYear: true,
                horsepower: true,
                kilowatts: true,
                createdAt: true,
                updatedAt: true,
                transmission: {
                    name: true,
                },
                fuelType: {
                    name: true,
                },
                model: {
                    name: true,
                    brand: {
                        name: true,
                    }
                },
                body: {
                    name: true,
                },
                color: {
                    name: true,
                },
                user: {
                    username: true,
                },
                vehicleEquipments: {
                    equipmentId: true,
                    equipment: {
                        name: true,
                    },
                },
                vehicleImages: {
                    imageId: true,
                    image: {
                        imageUrl: true,
                    }
                }
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
                vehicleEquipments: {
                    equipment: true
                },
                vehicleImages: {
                    image: true
                },
            }
        });

        return checkIfDefined(data)
    }

    // TODO: proveriti da li sve metode rade ispravno
    static async getVehicleById(id: number){
        const data = await repo.findOne({
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
                vehicleId: id,
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
        })

        return checkIfDefined(data)
    }

    static async createVehicle(model: VehicleModel){
        return await repo.save({
            fuelTypeId: model.fuelTypeId,
            bodyId: model.bodyId,
            colorId: model.colorId,
            userId: model.userId,
            transmissionId: model.transmissionId,
            modelId: model.modelId,
            name: model.name,
            price: model.price,
            mileage: model.mileage,
            productionYear: model.productionYear,
            createdAt: new Date()
        })
    }

    static async updateVehicle(id: number, model: VehicleModel){
        const data = await this.getVehicleById(id);
        data.fuelTypeId = model.fuelTypeId,
        data.bodyId = model.bodyId,
        data.colorId = model.colorId,
        data.userId = model.userId,
        data.transmissionId = model.transmissionId,
        data.modelId = model.modelId,
        data.name = model.name,
        data.price = model.price,
        data.mileage = model.mileage,
        data.productionYear = model.productionYear,
        data.createdAt = new Date()
        return await repo.save(data)
    }

    static async deleteVehicle(id: number){
        const data = await this.getVehicleById(id);
        data.deletedAt = new Date();
        await repo.save(data)
    }
}