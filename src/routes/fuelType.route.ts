import {Router} from "express";
import {handleRequest} from "../utils";
import {TransmissionService} from "../services/transmission.service";
import {FuelTypeService} from "../services/fuelType.service";

export const FuelTypeRoute = Router()

FuelTypeRoute.get('/', async (req, res) => {
    await handleRequest(res, FuelTypeService.getAllFuelTypes())
})

FuelTypeRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, FuelTypeService.getFuelTypeById(id))
})

FuelTypeRoute.post('/', async (req, res) => {
    await handleRequest(res, FuelTypeService.createFuelType(req.body),);
});
FuelTypeRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, FuelTypeService.updateFuelType(id, req.body),);
});

FuelTypeRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, FuelTypeService.deleteFuelType(id),);
});