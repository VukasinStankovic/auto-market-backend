import {Router} from "express";
import {handleRequest} from "../utils";
import {ModelService} from "../services/model.service";
import {BrandService} from "../services/brand.service";

export const BrandRoute = Router()

BrandRoute.get('/', async (req, res) => {
    await handleRequest(res, BrandService.getAllBrands())
})