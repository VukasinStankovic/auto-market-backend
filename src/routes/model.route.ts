import {Router} from "express";
import {handleRequest} from "../utils";
import {TransmissionService} from "../services/transmission.service";
import {ModelService} from "../services/model.service";
import {BrandService} from "../services/brand.service";
import {BrandRoute} from "./brand.route";

export const ModelRoute = Router()

ModelRoute.get('/', async (req, res) => {
    await handleRequest(res, ModelService.getAllModels())
})


ModelRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, ModelService.getModelById(id))
})

ModelRoute.post('/', async (req, res) => {
    await handleRequest(res, ModelService.createModel(req.body),);
});
ModelRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, ModelService.updateModel(id, req.body),);
});

ModelRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, ModelService.deleteModel(id),);
});