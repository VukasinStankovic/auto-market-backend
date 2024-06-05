import {AppDataSource} from "../db";
import {Between, IsNull, LessThanOrEqual} from "typeorm";
import {Vehicle} from "../entities/Vehicle";
import {checkIfDefined} from "../utils";
import {VehicleModel} from "../models/vehicle.model";
import {FilterModel} from "../models/filter.model";
import {fileName} from "typeorm-model-generator/dist/src/NamingStrategy";

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

        return checkIfDefined(data);
    }

    static async getVehiclesByFilter(filter: FilterModel) {
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
                    vehicleEquipmentId: true,
                    equipment: {
                        equipmentId: true,
                        name: true,
                    },
                },
                vehicleImages: {
                    vehicleImageId: true,
                    image: {
                        imageId: true,
                        imageUrl: true,
                    }
                }
            },
            where: {
                price: filter.priceTo ? LessThanOrEqual(filter.priceTo) : undefined,
                productionYear: Between(filter.yearFrom, filter.yearTo) ? Between(filter.yearFrom, filter.yearTo) : undefined,
                deletedAt: IsNull(),
                transmission: {
                    deletedAt: IsNull()
                },
                body: {
                    bodyId: filter.bodyId ? filter.bodyId : undefined,
                    deletedAt: IsNull()
                },
                fuelType: {
                    fuelTypeId: filter.fuelTypeId ? filter.fuelTypeId : undefined,
                    deletedAt: IsNull()
                },
                model: {
                    modelId: filter.modelId  ? filter.modelId : undefined,
                    deletedAt: IsNull(),
                    brand: {
                        brandId: filter.brandId  ? filter.brandId : undefined,
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
                    equipment: true,
                },
                vehicleImages: {
                    image: true
                },
            }
        });
        return checkIfDefined(data);
    }

    static async getVehicleById(id: number) {
        const data = await repo.findOne({
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
                    vehicleEquipmentId: true,
                    equipment: {
                        equipmentId: true,
                        name: true,
                    },
                },
                vehicleImages: {
                    vehicleImageId: true,
                    image: {
                        imageId: true,
                        imageUrl: true,
                    }
                }
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
                vehicleEquipments: {
                    equipment: true,
                },
                vehicleImages: {
                    image: true
                },
            }
        });
        return checkIfDefined(data);
    }

    static async createVehicle(model: VehicleModel) {
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
        });
    }

    static async updateVehicle(id: number, model: VehicleModel) {
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
            data.createdAt = new Date();
        return await repo.save(data);
    }

    static async deleteVehicle(id: number) {
        const data = await this.getVehicleById(id);
        data.deletedAt = new Date();
        await repo.save(data);
    }
}