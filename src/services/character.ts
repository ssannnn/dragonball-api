
import characterModel from "../models/characters.model";

const getCharacters = async () => {
    const responseCharacter = await characterModel.find({});
    return responseCharacter;
}

const getCharacter = async (id:string) => {
    const responseCharacter = await characterModel.findOne({ id: id });
    return responseCharacter;
}

export {getCharacter, getCharacters};