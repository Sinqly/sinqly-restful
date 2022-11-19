import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(CreateUserDto: CreateUserDto) {
    const user = this.userRepo.create(CreateUserDto);
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne({where: {id: id}});
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    const updateResult = await this.userRepo.update(id, UpdateUserDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(User, id);
    }
    return this.userRepo.findOne({where: {id: id}});
  }

  async remove(id: number) {
    const deleteResult = await this.userRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(User, id);
    }
  }
}
