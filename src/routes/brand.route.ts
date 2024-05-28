import {Router} from "express";
import {handleRequest} from "../utils";
import {ModelService} from "../services/model.service";
import {BrandService} from "../services/brand.service";
import {Brand} from "../entities/Brand";

export const BrandRoute = Router()

BrandRoute.get('/', async (req, res) => {
    await handleRequest(res, BrandService.getAllBrands())
})

BrandRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, BrandService.getBrandById(id))
})

BrandRoute.post('/', async (req, res) => {
    await handleRequest(res, BrandService.createBrand(req.body),);
});
BrandRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, BrandService.updateBrand(id, req.body),);
});

BrandRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, BrandService.deleteBrand(id),);
});