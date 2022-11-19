import { Module } from '@nestjs/common'
import { ConnectionsController } from './connections.controller'
import { ConnectionsService } from './connections.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from './entities/connection.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Connection])],
  controllers: [ConnectionsController],
  providers: [ConnectionsService],
})
export class ConnectionsModule {}
