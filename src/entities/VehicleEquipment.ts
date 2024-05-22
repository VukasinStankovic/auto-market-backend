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
    name: "vehicle_equipment",
    unsigned: true,
  })
  vehicleEquipment: number;

  @Column("int", { name: "vehicle_id", unsigned: true })
  vehicleId: number;

  @Column("int", { name: "equipment_id", unsigned: true })
  equipmentId: number;

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
