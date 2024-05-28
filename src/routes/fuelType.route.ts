import {Router} from "express";
import {handleRequest} from "../utils";
import {TransmissionService} from "../services/transmission.service";
import {FuelTypeService} from "../services/fuelType.service";

export const FuelTypeRoute = Router()

FuelTypeRoute.get('/', async (req, res) => {
    await handleRequest(res, FuelTypeService.getAllFuelTypes())
})