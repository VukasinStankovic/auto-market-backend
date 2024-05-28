import {Router} from "express";
import {handleRequest} from "../utils";
import {EquipmentService} from "../services/equipment.service";

export const EquipmentRoute = Router()

EquipmentRoute.get("/",  async (req, res) => {
    await handleRequest(res, EquipmentService.getAllEquipment())
})


EquipmentRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, EquipmentService.getEquipmentById(id))
})

EquipmentRoute.post('/', async (req, res) => {
    await handleRequest(res, EquipmentService.createEquipment(req.body),);
});
EquipmentRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, EquipmentService.updateEquipment(id, req.body),);
});

EquipmentRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, EquipmentService.deleteEquipment(id),);
});