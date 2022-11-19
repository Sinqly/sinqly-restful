import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityNotFoundError, Repository } from 'typeorm'
import { CreateConnectionDto } from './dto/create-connection.dto'
import { UpdateConnectionDto } from './dto/update-connection.dto'
import { Connection } from './entities/connection.entity'

@Injectable()
export class ConnectionsService {
  constructor(
    @InjectRepository(Connection)
    private connectionRepo: Repository<Connection>,
  ) {}

  create(CreateConnectionDto: CreateConnectionDto) {
    const connection = this.connectionRepo.create(CreateConnectionDto)
    return this.connectionRepo.save(connection)
  }

  findAll() {
    return this.connectionRepo.find()
  }

  findOne(id: number) {
    return this.connectionRepo.findOne({ where: { id: id } })
  }

  async update(id: number, UpdateConnectionDto: UpdateConnectionDto) {
    const updateResult = await this.connectionRepo.update(
      id,
      UpdateConnectionDto,
    )
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Connection, id)
    }
    return this.connectionRepo.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    const deleteResult = await this.connectionRepo.delete(id)
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Connection, id)
    }
  }
}
