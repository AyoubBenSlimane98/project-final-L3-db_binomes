import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateBinomesDto, UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers() {
    return await this.userService.getAllusers();
  }
  @Get('all')
  async getCountUsers() {
    return await this.userService.getCountUsers();
  }
  @Post()
  async createAllAccountUsers(@Body() userDto: UserDto) {
    return await this.userService.createAllAccountUsers(userDto);
  }
  @Post('create')
  async createBinome(@Body() createBinomesDto: CreateBinomesDto) {
    return await this.userService.createBinomes(createBinomesDto.binomes);
  }
}
