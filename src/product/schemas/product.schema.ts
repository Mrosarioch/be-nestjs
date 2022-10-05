import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: String,
    apellido:String,
    asegura: String,
    cedula: String,
    poliza: String,
    autoriza: String,
    amount:Number,
    createdAt: { type: Date, default: Date.now }
});


   