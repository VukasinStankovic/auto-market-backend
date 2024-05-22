import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uq_transmission_name", ["name"], { unique: true })
@Entity("transmission", { schema: "auto_market" })
export class Transmission {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "transmission_id",
    unsigned: true,
  })
  transmissionId: number;

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
}
