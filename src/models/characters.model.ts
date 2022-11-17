import { Schema, model } from "mongoose";
import { Character } from "../interface/character.interface";

const CharacterSchema = new Schema<Character>(
    {
        "id": {
            type: String,
        },
        "name":{
            type: String,
        },
        "power_level":{
            type: String,
        }, 
        "saga":{
            type: String,
        }, 
        "series":{
            type: String,
        }, 
        "species":{
            type: String,
        } 
    }   
);

const characterModel = model("characters", CharacterSchema, "dragonball-api");

export default characterModel;
