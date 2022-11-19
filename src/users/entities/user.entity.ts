import { Connection } from 'src/connections/entities/connection.entity'
import { Interaction } from 'src/interactions/entities/interaction.entity'
import { Post } from 'src/posts/entities/post.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  phone: string

  @Column()
  cpf: string

  @Column()
  biography: string

  @Column()
  profileImage: string

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @OneToMany(() => Interaction, (interaction) => interaction.user)
  interactions: Interaction[]

  @OneToMany(() => Connection, (connection) => connection.user1)
  connections: Connection[]

  @OneToMany(() => Connection, (connection) => connection.user2)
  connections2: Connection[]
}
