import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
  ParseIntPipe,
  Patch,
  NotFoundException,
  Session,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
// import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {
    this.usersService = usersService;
    this.authService = authService;
  }

  @Get('/whoami')
  async whoAmI(@Session() session: any) {
    return this.usersService.findOne(session.userId);
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    if (session) {
      session.userId = user.id;
    }
    return user;
  }

  @Post('/signin')
  async userSignin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Get('/:id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      return new NotFoundException('User not found');
    }
    return user;
  }

  @Get()
  async findAllUsers() {
    return this.usersService.find('');
  }

  @Put('/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.update(id, body);
  }

  @Delete('/:id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  @Patch('/:id')
  async updatePathUser(
    @Param('id', ParseIntPipe) id: string,
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.update(parseInt(id), body);
  }
}
