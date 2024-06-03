import {Router} from "express";
import {handleRequest} from "../utils";
import {BodyService} from "../services/body.service";
import {BodyRoute} from "./body.route";
import {UserService} from "../services/user.service";

export const UserRoute = Router()

UserRoute.post('/login', async (req, res) => {
    await handleRequest(res, UserService.login(req.body))
})

UserRoute.post('/refresh', async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    await handleRequest(res, UserService.refreshToken(token))
})