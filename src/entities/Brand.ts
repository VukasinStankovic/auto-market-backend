import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";

@Index("uq_brand_name", ["name"], { unique: true })
@Entity("brand", { schema: "auto_market" })
export class Brand {
  @PrimaryGeneratedColumn({ type: "int", name: "brand_id", unsigned: true })
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

  @OneToMany(() => Model, (model) => model.brand)
  models: Model[];
}
