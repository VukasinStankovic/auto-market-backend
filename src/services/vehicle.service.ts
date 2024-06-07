import {AppDataSource} from "../db";
import {Between, IsNull, LessThanOrEqual} from "typeorm";
import {Vehicle} from "../entities/Vehicle";
import {Image} from "../entities/Image";
import {VehicleImage} from "../entities/VehicleImage";
import {checkIfDefined} from "../utils";
import {VehicleModel} from "../models/vehicle.model";
import {FilterModel} from "../models/filter.model";
import {ImageModel} from "../models/image.model";
import {EquipmentModel} from "../models/equipment.model";
import {VehicleEquipment} from "../entities/VehicleEquipment";

const repo = AppDataSource.getRepository(Vehicle);
const imageRepo = AppDataSource.getRepository(Image);
const vehicleEquipmentRepo = AppDataSource.getRepository(VehicleEquipment);
const vehicleImageRepo = AppDataSource.getRepository(VehicleImage);

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

    static async createVehicle(vehicle: VehicleModel, images: ImageModel[], equipments: EquipmentModel[]) {
        const newVehicle = await repo.save({
            fuelTypeId: vehicle.fuelTypeId,
            bodyId: vehicle.bodyId,
            colorId: vehicle.colorId,
            userId: vehicle.userId,
            transmissionId: vehicle.transmissionId,
            modelId: vehicle.modelId,
            name: vehicle.name,
            price: vehicle.price,
            mileage: vehicle.mileage,
            productionYear: vehicle.productionYear,
            numberOfDoors: vehicle.numberOfDoors,
            numberOfSeats: vehicle.numberOfSeats,
            horsepower: vehicle.horsepower,
            kilowatts: vehicle.kilowatts,
            createdAt: new Date()
        });

        const newImages = await Promise.all(images.map(async (image) => {
            return await imageRepo.save({
                imageUrl: image.imageUrl
            });
        }));

        const vehicleImages =   await Promise.all(newImages.map(async (image) => {
            return await vehicleImageRepo.save({
                vehicleId: newVehicle.vehicleId,
                imageId: image.imageId
            });
        }));

        // TODO: NE RADI - ISPRAVI
        const vehicleEquipment = await Promise.all(equipments.map(async (equipment) => {
            return await vehicleEquipmentRepo.save({
                vehicleId: newVehicle.vehicleId,
                equipmentId: equipment.equipmentId
            });
        }));
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