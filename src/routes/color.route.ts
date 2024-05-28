import {Router} from "express";
import {handleRequest} from "../utils";
import {ColorService} from "../services/color.service";


export const ColorRoute = Router()

ColorRoute.get('/', async (req, res) => {
    await handleRequest(res, ColorService.getAllColors())
})

ColorRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, ColorService.getColorById(id))
})

ColorRoute.post('/', async (req, res) => {
    await handleRequest(res, ColorService.createColor(req.body),);
});
ColorRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, ColorService.updateColor(id, req.body),);
});

ColorRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, ColorService.deleteColor(id),);
});