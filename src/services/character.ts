
import characterModel from "../models/characters.model";

const getCharacters = async () => {
    const responseCharacter = await characterModel.find({});
    return responseCharacter;
}

const getCharacter = () => {

}

export {getCharacter, getCharacters};