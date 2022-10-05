import { Number } from "mongoose";

export class CreateProductDTO {
    readonly name: string;
    readonly apellido: string;
    readonly asegura: string;
    readonly cedula: string;
    readonly poliza: string;
    readonly autoriza:string;
    readonly amount:number;
    readonly createdAt: Date;
}

