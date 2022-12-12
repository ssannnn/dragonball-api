
import characterModel from "../models/characters.model";

const getCharacters = async () => {
    const options = {
        select: ("-_id"),
        page: 1,
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