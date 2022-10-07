import { Number } from 'mongoose';

export class CreateProductDTO {
  readonly name: string;
  readonly apellido: string;
  readonly cedula: string;
  readonly asegura: string;
  readonly poliza: string;
  readonly descripcion: string;
  readonly autoriza: string;
  readonly amount: number;
  readonly createdAt: Date;
}
