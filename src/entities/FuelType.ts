import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehicle } from "./Vehicle";

@Index("uq_fuel_type_name", ["name"], { unique: true })
@Entity("fuel_type", { schema: "auto_market" })
export class FuelType {
  @PrimaryGeneratedColumn({ type: "int", name: "fuel_type_id", unsigned: true })
  fuelTypeId: number;

  @Column("varchar", { name: "name", unique: true, length: 255 })
  name: string;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.fuelType)
  vehicles: Vehicle[];
}
