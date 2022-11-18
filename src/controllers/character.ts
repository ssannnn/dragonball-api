import { Request, Response } from "express";
import { getCharacters, getCharacter } from "../services/character";
import handleHttp from "../utils/error.handler";

const getItems = async (req: Request, res: Response) => {
    try {
        const response =  await getCharacters();
        res.send(response);
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS")
        
    }
}


const getItem = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response =  await getCharacter(id);
        res.send(response);
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM")
        
    }

}
export {getItems, getItem};