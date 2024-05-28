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
import { Color } from "./Color";
import { FuelType } from "./FuelType";
import { Model } from "./Model";
import { Transmission } from "./Transmission";
import { User } from "./User";
import { VehicleEquipment } from "./VehicleEquipment";
import { VehicleImage } from "./VehicleImage";

@Index("fk_vehicle_fuel_type", ["fuelTypeId"], {})
@Index("fk_vehicle_body", ["bodyId"], {})
@Index("fk_vehicle_color", ["colorId"], {})
@Index("fk_vehicle_transmission", ["transmissionId"], {})
@Index("fk_vehicle_model", ["modelId"], {})
@Index("fk_vehicle_user", ["userId"], {})
@Entity("vehicle", { schema: "auto_market" })
export class Vehicle {
  @PrimaryGeneratedColumn({ type: "int", name: "vehicle_id", unsigned: true })
  vehicleId: number;

  @Column("int", { name: "fuel_type_id", unsigned: true })
  fuelTypeId: number;

  @Column("int", { name: "body_id", unsigned: true })
  bodyId: number;

  @Column("int", { name: "color_id", unsigned: true })
  colorId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "transmission_id", unsigned: true })
  transmissionId: number;

  @Column("int", { name: "model_id", unsigned: true })
  modelId: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "price", unsigned: true })
  price: number;

  @Column("int", { name: "mileage", unsigned: true })
  mileage: number;

  @Column("int", { name: "production_year", unsigned: true })
  productionYear: number;

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

  @ManyToOne(() => Model, (model) => model.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "model_id", referencedColumnName: "modelId" }])
  model: Model;

  @ManyToOne(() => Transmission, (transmission) => transmission.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "transmission_id", referencedColumnName: "transmissionId" },
  ])
  transmission: Transmission;

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
