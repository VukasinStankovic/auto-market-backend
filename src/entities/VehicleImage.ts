import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Image } from "./Image";
import { Vehicle } from "./Vehicle";

@Index("uq_vehicle_image_vehicle_image", ["vehicleId", "imageId"], {
  unique: true,
})
@Index("fk_vehicle_image_image", ["imageId"], {})
@Entity("vehicle_image", { schema: "auto_market" })
export class VehicleImage {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "vehicle_image_id",
    unsigned: true,
  })
  vehicleImageId: number;

  @Column("int", { name: "vehicle_id", unsigned: true })
  vehicleId: number;

  @Column("int", { name: "image_id", unsigned: true })
  imageId: number;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Image, (image) => image.vehicleImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "imageId" }])
  image: Image;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.vehicleImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "vehicle_id", referencedColumnName: "vehicleId" }])
  vehicle: Vehicle;
}
