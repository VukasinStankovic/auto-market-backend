import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehicle } from "./Vehicle";

@Index("uq_user_username", ["username"], { unique: true })
@Entity("user", { schema: "auto_market" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "username", unique: true, length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("bool", { name: "active", default: () => "'true'" })
  active: boolean;

  @Column("varchar", {
    name: "created_at",
    length: 255,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: string;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
  vehicles: Vehicle[];
}
