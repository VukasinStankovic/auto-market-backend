import {Router} from "express";
import {handleRequest} from "../utils";
import {TransmissionService} from "../services/transmission.service";

export const TransmissionRoute = Router()

TransmissionRoute.get('/', async (req, res) => {
    await handleRequest(res, TransmissionService.getAllTransmission())
})