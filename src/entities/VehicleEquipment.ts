import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Equipment } from "./Equipment";
import { Vehicle } from "./Vehicle";

@Index("uq_vehicle_equipment_vehicle_equipment", ["vehicleId", "equipmentId"], {
  unique: true,
})
@Index("fk_vehicle_equipment_equipment", ["equipmentId"], {})
@Entity("vehicle_equipment", { schema: "auto_market" })
export class VehicleEquipment {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "vehicle_equipment_id",
    unsigned: true,
  })
  vehicleEquipmentId: number;

  @Column("int", { name: "vehicle_id", unsigned: true })
  vehicleId: number;

  @Column("int", { name: "equipment_id", unsigned: true })
  equipmentId: number;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Equipment, (equipment) => equipment.vehicleEquipments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "equipment_id", referencedColumnName: "equipmentId" }])
  equipment: Equipment;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.vehicleEquipments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "vehicle_id", referencedColumnName: "vehicleId" }])
  vehicle: Vehicle;
}
