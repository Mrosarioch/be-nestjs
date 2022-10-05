import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: String;
    readonly apellido: String;
    readonly asegura: String;
    readonly cedula: String;
    readonly poliza: String;
    readonly autoriza:String;
    readonly amount:Number;
    readonly createdAt: Date;
}