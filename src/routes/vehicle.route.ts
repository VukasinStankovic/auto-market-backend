import {Router} from "express";
import {handleRequest} from "../utils";
import {VehicleService} from "../services/vehicle.service";

export const VehicleRoute = Router()

VehicleRoute.get("/", async (req, res) => {
    await handleRequest(res, VehicleService.getAllVehicles())
})