import { Request } from "express";
import characterModel from "../models/characters.model";

const getCharacters = async (req:Request) => {
        
    const page: number = parseInt(req.query.page as string, 10) || 1;

    const options = {
        select: ("-_id"),
        page: page,
        limit: 10,
    };
      
    const responseCharacter = await characterModel.paginate({}, options);
    
    return responseCharacter;
}

const getCharacter = async (id:string) => {
    const responseCharacter = await characterModel.findOne({ id: id });
    return responseCharacter;
}

export {getCharacter, getCharacters};