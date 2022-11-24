import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    this.usersService.doSomeQuery()
  }

  @Post()
  create(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Get('/findUsername/:username')
  findByUsername(@Param('username') username: string) {
    return this.usersService.findByUsername(username)
  }

  @Post('/validation')
  async findByEmailAndPassword(
    @Body()
    validationUser: User,
  ) {
    try {
      const { email, password } = validationUser
      const user = await this.usersService.findByEmailAndPassword(
        email,
        password,
      )
      return {
        status: true,
        user: user,
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User not found!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      )
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, UpdateUserDto)
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
