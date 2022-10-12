import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

import { CreateUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Add User: /user/create encriptado Bcript
  @Post('/create')
  async createUser(
    @Res() res, 
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('telefono') telefono: string,
    @Body('username') username: string,
    @Body('createdAt') createdAt: Date,
  ) {
    password = await bcrypt.hash(password, 10);
    const hashedUser = {      name,
      email,
      telefono,
      username,
      password,
      createdAt}
    const user = await this.userService.createUser(hashedUser)
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Created',
      user,
    });
  }

  // Get Users /user
  // @Get('/list')
  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    // sumar todo y contar la cantidad
    let count= users.length
    let total = users.reduce(
      (accum: number, user: any) => accum + user.amount,
      0,
    );
    return res.status(HttpStatus.OK).json({ users: users, total: total, cantidad: count });
    // return res.status(HttpStatus.OK).json(users );
  }

  // GET single user: /user/5c9d46100e2e5c44c444b2d1
  @Get('/:userID')
  async getUser(@Res() res, @Param('userID') userID) {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }
  // Login user: /user/5c9d46100e2e5c44c444b2d1
  @Post('/login')
  async logUser(@Res() res, @Body() usuario: object,) {
    const response = await this.userService.findUser(usuario);
    if (response == "Not Found") throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(response);
  }

  // Delete User: /delete?userID=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    const userDeleted = await this.userService.deleteUser(userID);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      userDeleted,
    });
  }

  // Update User: /update?userID=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateUser(
    @Res() res,
    @Body() createUserDTO: CreateUserDTO,
    @Query('userID') userID,
  ) {
    const updatedUser = await this.userService.updateUser(
      userID,
      createUserDTO,
    );
    if (!updatedUser) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User Updated Successfully',
      updatedUser,
    });
  }
}
