import {Router} from "express";
import {handleRequest} from "../utils";
import {EquipmentService} from "../services/equipment.service";

export const EquipmentRoute = Router()

EquipmentRoute.get("/",  async (req, res) => {
    await handleRequest(res, EquipmentService.getAllEquipment())
})