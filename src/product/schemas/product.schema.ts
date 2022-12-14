import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: String,
    apellido:String,
    cedula: String,
    asegura: String,
    poliza: String,
    descripcion:String,
    autoriza: String,
    amount: {
        type: Number,
        default: 500,
        required: true
    },
    createdAt: { type: Date, default: Date.now }
});


