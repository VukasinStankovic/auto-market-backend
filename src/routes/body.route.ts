import {Router} from "express";
import {handleRequest} from "../utils";
import {BodyService} from "../services/body.service";

export const BodyRoute = Router()

BodyRoute.get('/', async (req, res) => {
    await handleRequest(res, BodyService.getAll())
})