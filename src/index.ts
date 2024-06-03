import cors from "cors";
import morgan from "morgan";
import express from "express";
import {configDotenv} from "dotenv";
import {AppDataSource} from "./db";
import {VehicleRoute} from "./routes/vehicle.route";
import {TransmissionRoute} from "./routes/transmission.route";
import {ModelRoute} from "./routes/model.route";
import {FuelTypeRoute} from "./routes/fuelType.route";
import {EquipmentRoute} from "./routes/equipment.route";
import {ColorRoute} from "./routes/color.route";
import {BrandRoute} from "./routes/brand.route";
import {BodyRoute} from "./routes/body.route";
import {UserRoute} from "./routes/user.route";
import {authenticateToken} from "./utils";



const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

configDotenv();
AppDataSource.initialize().then(() => {
    console.log("Connected to database");
    const port = process.env.SERVER_PORT;
    app.listen(port, () => {
        console.log("App started and listening on port: " + port);
    });
}).catch((e) => {
    console.log(e);
});
app.use(authenticateToken)

app.use("/api/vehicle", VehicleRoute)
app.use("/api/transmission", TransmissionRoute)
app.use("/api/model", ModelRoute)
app.use("/api/fuel-type", FuelTypeRoute)
app.use("/api/equipment", EquipmentRoute)
app.use("/api/color", ColorRoute)
app.use("/api/brand", BrandRoute)
app.use("/api/body", BodyRoute)
app.use("/api/user", UserRoute)

app.get("*", (req, res) => {
    res.status(404).json({
        message: "NOT_FOUND!",
        timestamp: new Date(),
    });
});

app.post("*", (req, res) => {
    res.status(501).json({
        message: "NOT_IMPLEMENTED!",
        timestamp: new Date(),
    });
});

app.put("*", (req, res) => {
    res.status(501).json({
        message: "NOT_IMPLEMENTED!",
        timestamp: new Date(),
    });
});

app.delete("*", (req, res) => {
    res.status(501).json({
        message: "NOT_IMPLEMENTED!",
        timestamp: new Date(),
    });
});