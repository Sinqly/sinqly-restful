import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { ConnectionsModule } from './connections/connections.module'
import { Connection } from './connections/entities/connection.entity'
import { Interaction } from './interactions/entities/interaction.entity'
import { InteractionsModule } from './interactions/interactions.module'
import { Post } from './posts/entities/post.entity'
import { PostsModule } from './posts/posts.module'
import { User } from './users/entities/user.entity'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'senai',
      database: 'sinqly',
      synchronize: true,
      entities: [User, Post, Interaction, Connection],
    }),
    UsersModule,
    PostsModule,
    InteractionsModule,
    ConnectionsModule,
  ],
})
export class AppModule {}
