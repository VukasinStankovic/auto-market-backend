import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VehicleEquipment } from "./VehicleEquipment";

@Index("uq_equipment_name", ["name"], { unique: true })
@Entity("equipment", { schema: "auto_market" })
export class Equipment {
  @PrimaryGeneratedColumn({ type: "int", name: "equipment_id", unsigned: true })
  equipmentId: number;

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

  @OneToMany(
    () => VehicleEquipment,
    (vehicleEquipment) => vehicleEquipment.equipment
  )
  vehicleEquipments: VehicleEquipment[];
}
