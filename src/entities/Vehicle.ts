import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Body } from "./Body";
import { Brand } from "./Brand";
import { Color } from "./Color";
import { FuelType } from "./FuelType";
import { User } from "./User";
import { VehicleEquipment } from "./VehicleEquipment";
import { VehicleImage } from "./VehicleImage";

@Index("fk_vehicle_fuel_type", ["fuelTypeId"], {})
@Index("fk_vehicle_brand", ["brandId"], {})
@Index("fk_vehicle_body", ["bodyId"], {})
@Index("fk_vehicle_color", ["colorId"], {})
@Index("fk_vehicle_user", ["userId"], {})
@Entity("vehicle", { schema: "auto_market" })
export class Vehicle {
  @PrimaryGeneratedColumn({ type: "int", name: "vehicle_id", unsigned: true })
  vehicleId: number;

  @Column("int", { name: "fuel_type_id", unsigned: true })
  fuelTypeId: number;

  @Column("int", { name: "brand_id", unsigned: true })
  brandId: number;

  @Column("int", { name: "body_id", unsigned: true })
  bodyId: number;

  @Column("int", { name: "color_id", unsigned: true })
  colorId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "price", unsigned: true })
  price: number;

  @Column("int", { name: "mileage", unsigned: true })
  mileage: number;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Body, (body) => body.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "body_id", referencedColumnName: "bodyId" }])
  body: Body;

  @ManyToOne(() => Brand, (brand) => brand.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "brand_id", referencedColumnName: "brandId" }])
  brand: Brand;

  @ManyToOne(() => Color, (color) => color.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "color_id", referencedColumnName: "colorId" }])
  color: Color;

  @ManyToOne(() => FuelType, (fuelType) => fuelType.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "fuel_type_id", referencedColumnName: "fuelTypeId" }])
  fuelType: FuelType;

  @ManyToOne(() => User, (user) => user.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @OneToMany(
    () => VehicleEquipment,
    (vehicleEquipment) => vehicleEquipment.vehicle
  )
  vehicleEquipments: VehicleEquipment[];

  @OneToMany(() => VehicleImage, (vehicleImage) => vehicleImage.vehicle)
  vehicleImages: VehicleImage[];
}
