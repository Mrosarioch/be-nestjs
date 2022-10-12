import { Schema } from "mongoose";

export const UserSchema = new Schema({

    name:String,
    email:String,
    telefono:String,
    username: String,
    password:String,
    createdAt: { type: Date, default: Date.now }
});


