import {Request, Response, Router} from "express";
import { getItems } from "../controllers/character";

const router = Router();

router.get("/", getItems);



export {router};