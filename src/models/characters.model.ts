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
        },
        "image_url": {
            type: String,
        } 
    }   
);

const characterModel = model<Character>("characters", CharacterSchema, "dragon-restapi");

export default characterModel;
