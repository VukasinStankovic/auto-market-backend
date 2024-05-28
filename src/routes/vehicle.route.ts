import {Router} from "express";
import {handleRequest} from "../utils";
import {VehicleService} from "../services/vehicle.service";
import {BrandService} from "../services/brand.service";
import {BrandRoute} from "./brand.route";

export const VehicleRoute = Router()

VehicleRoute.get("/", async (req, res) => {
    await handleRequest(res, VehicleService.getAllVehicles())
})


VehicleRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, VehicleService.getVehicleById(id))
})

VehicleRoute.post('/', async (req, res) => {
    await handleRequest(res, VehicleService.createVehicle(req.body),);
});
VehicleRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, VehicleService.updateVehicle(id, req.body),);
});

VehicleRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, VehicleService.deleteVehicle(id),);
});