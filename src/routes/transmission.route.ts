import {Router} from "express";
import {handleRequest} from "../utils";
import {TransmissionService} from "../services/transmission.service";


export const TransmissionRoute = Router()

TransmissionRoute.get('/', async (req, res) => {
    await handleRequest(res, TransmissionService.getAllTransmission())
})

TransmissionRoute.get("/:id", async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, TransmissionService.getTransmissionById(id))
})

TransmissionRoute.post('/', async (req, res) => {
    await handleRequest(res, TransmissionService.createTransmission(req.body),);
});
TransmissionRoute.put('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, TransmissionService.updateTransmission(id, req.body),);
});

TransmissionRoute.delete('/:id', async (req, res) => {
    const id = req.params.id as any as number;
    await handleRequest(res, TransmissionService.deleteTransmission(id),);
});