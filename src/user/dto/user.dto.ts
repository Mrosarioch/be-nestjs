import { Number } from 'mongoose';

export class CreateUserDTO {
  readonly name:string;
  readonly email:string;
  readonly telefono:string;
  readonly username:string;
  readonly password:string;
  readonly createdAt:Date;
}
