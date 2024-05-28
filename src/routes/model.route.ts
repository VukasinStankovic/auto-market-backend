import {Router} from "express";
import {handleRequest} from "../utils";
import {TransmissionService} from "../services/transmission.service";
import {ModelService} from "../services/model.service";

export const ModelRoute = Router()

ModelRoute.get('/', async (req, res) => {
    await handleRequest(res, ModelService.getAllModels())
})