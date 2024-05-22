import {configDotenv} from "dotenv";
import {DataSource} from "typeorm";
import {Body} from "./entities/Body";
import {Brand} from "./entities/Brand";
import {Color} from "./entities/Color";
import {Equipment} from "./entities/Equipment";
import {FuelType} from "./entities/FuelType";
import {Image} from "./entities/Image";
import {Model} from "./entities/Model";
import {Transmission} from "./entities/Transmission";
import {User} from "./entities/User";
import {VehicleEquipment} from "./entities/VehicleEquipment";
import {VehicleImage} from "./entities/VehicleImage";
import {Vehicle} from "./entities/Vehicle";

configDotenv();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number.parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Body, Brand, Color, Equipment, FuelType, Image, Model, Transmission, User, VehicleEquipment, VehicleImage, Vehicle],
    logging: false
});

