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

  @Column({ nullable: true })
  lastName: string

  @Column({ nullable: true })
  username: string

  @Column({ nullable: true })
  email: string

  @Column({ nullable: true })
  password: string

  @Column({ nullable: true })
  phone: string

  @Column({ nullable: true })
  cpf: string

  @Column({ nullable: true })
  biography: string

  @Column({ nullable: true })
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
