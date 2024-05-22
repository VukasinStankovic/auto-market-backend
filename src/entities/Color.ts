import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehicle } from "./Vehicle";

@Index("uq_color_name", ["name"], { unique: true })
@Entity("color", { schema: "auto_market" })
export class Color {
  @PrimaryGeneratedColumn({ type: "int", name: "color_id", unsigned: true })
  colorId: number;

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

  @OneToMany(() => Vehicle, (vehicle) => vehicle.color)
  vehicles: Vehicle[];
}
