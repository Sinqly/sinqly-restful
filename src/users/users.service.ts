import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityNotFoundError, Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) { }

  create(CreateUserDto: CreateUserDto) {
    const user = this.userRepo.create(CreateUserDto)
    return this.userRepo.save(user)
  }

  async doSomeQuery() {
    const user = this.userRepo.create({
      name: 'teste',
      username: 'tester',
      biography: 'test',
      email: 'teste@gmail.com',
      password: 'teste',
    })
    return this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find()
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id: id } })
  }

  async findByUsername(username: string) {
    const users = await this.userRepo.find({ where: { username: username } })
    const user = users[0]
    return user
  }

  async findByEmailAndPassword(email: string, password: string) {
    try {
      const user = await this.userRepo.find({
        where: { email: email, password: password },
      })
      if (user.length === 0) throw 'User not found!'
      return user
    } catch (error) {
      throw Error(
        'There was an error validating user with: ' +
        email +
        ' ERROR: ' +
        error.message,
      )
    }
    return
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id: id } })
    try {
      const updatedUser = await this.userRepo.update(id, {
        ...user,
        ...UpdateUserDto,
      })
      return UpdateUserDto
    } catch (error) {
      throw new Error()
    }
  }

  async remove(id: number) {
    const deleteResult = await this.userRepo.delete(id)
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(User, id)
    }
  }
}
