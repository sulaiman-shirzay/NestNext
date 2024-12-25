import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
