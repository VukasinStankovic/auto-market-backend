import {Router} from "express";
import {handleRequest} from "../utils";
import {BodyService} from "../services/body.service";
import {BrandService} from "../services/brand.service";
import {BrandRoute} from "./brand.route";

export const BodyRoute = Router()

BodyRoute.get('/', async (req, res) => {
    await handleRequest(res, BodyService.getAll())
})

BodyRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, BodyService.getBodyById(id))
})

BodyRoute.post('/', async (req, res) => {
    await handleRequest(res, BodyService.createBody(req.body),);
});
BodyRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, BodyService.updateBody(id, req.body),);
});

BodyRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, BodyService.deleteBody(id),);
});