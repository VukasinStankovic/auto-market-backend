import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehicle } from "./Vehicle";

@Index("uq_body_name", ["name"], { unique: true })
@Entity("body", { schema: "auto_market" })
export class Body {
  @PrimaryGeneratedColumn({ type: "int", name: "body_id", unsigned: true })
  bodyId: number;

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

  @OneToMany(() => Vehicle, (vehicle) => vehicle.body)
  vehicles: Vehicle[];
}
