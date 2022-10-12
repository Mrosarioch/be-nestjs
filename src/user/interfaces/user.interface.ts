import { Document } from "mongoose";

export interface User extends Document {

  readonly neme:string;
  readonly email:string;
  readonly telefono:string;
  readonly username: string;
  readonly password: string;
  readonly createdAt: Date;
}
