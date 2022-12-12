import {Request, Response, Router} from "express";
import { getItems, getItem } from "../controllers/character";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);

export {router};