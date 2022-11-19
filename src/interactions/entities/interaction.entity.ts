import { Post } from 'src/posts/entities/post.entity'
import { User } from 'src/users/entities/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class Interaction {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  comment: string

  @Column()
  like: boolean

  @ManyToOne(() => Post, (post) => post.interactions)
  post: Post

  @ManyToOne(() => User, (user) => user.interactions)
  user: User
}
