import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VehicleImage } from "./VehicleImage";

@Index("uq_image_image_url", ["imageUrl"], { unique: true })
@Entity("image", { schema: "auto_market" })
export class Image {
  @PrimaryGeneratedColumn({ type: "int", name: "image_id", unsigned: true })
  imageId: number;

  @Column("varchar", { name: "image_url", unique: true, length: 255 })
  imageUrl: string;

  @OneToMany(() => VehicleImage, (vehicleImage) => vehicleImage.image)
  vehicleImages: VehicleImage[];
}
