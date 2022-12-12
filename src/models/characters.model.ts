import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { Character } from "../interface/character.interface";
import paginate from 'mongoose-paginate-v2';

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

CharacterSchema.plugin(paginate);

const characterModel = model<Character, mongoose.PaginateModel<Character>>("characters", CharacterSchema, "dragonball_dataset");

export default characterModel;
