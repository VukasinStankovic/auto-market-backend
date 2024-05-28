import {Router} from "express";
import {handleRequest} from "../utils";
import {ModelService} from "../services/model.service";
import {ColorService} from "../services/color.service";

export const ColorRoute = Router()

ColorRoute.get('/', async (req, res) => {
    await handleRequest(res, ColorService.getAllColors())
})