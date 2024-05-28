import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./Brand";
import { Vehicle } from "./Vehicle";

@Index("uq_model_name", ["name"], { unique: true })
@Index("fk_model_brand", ["brandId"], {})
@Entity("model", { schema: "auto_market" })
export class Model {
  @PrimaryGeneratedColumn({ type: "int", name: "model_id", unsigned: true })
  modelId: number;

  @Column("int", { name: "brand_id", unsigned: true })
  brandId: number;

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

  @ManyToOne(() => Brand, (brand) => brand.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "brand_id", referencedColumnName: "brandId" }])
  brand: Brand;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.model)
  vehicles: Vehicle[];
}
