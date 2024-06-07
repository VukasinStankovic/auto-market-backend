import {Router} from "express";
import {handleRequest} from "../utils";
import {VehicleService} from "../services/vehicle.service";
import {BrandService} from "../services/brand.service";
import {BrandRoute} from "./brand.route";
import {FilterModel} from "../models/filter.model";

export const VehicleRoute = Router()

VehicleRoute.get("/", async (req, res) => {
    await handleRequest(res, VehicleService.getAllVehicles())
})

VehicleRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, VehicleService.getVehicleById(id))
})

VehicleRoute.post('/', async (req, res) => {
    await handleRequest(res, VehicleService.createVehicle(req.body.vehicle, req.body.images, req.body.equipments));
});

VehicleRoute.post("/filtered", async (req, res) => {
    const filter: FilterModel = req.body;
    await handleRequest(res, VehicleService.getVehiclesByFilter(filter))
})

VehicleRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, VehicleService.updateVehicle(id, req.body));
});

VehicleRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, VehicleService.deleteVehicle(id));
});