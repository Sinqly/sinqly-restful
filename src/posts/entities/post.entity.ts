import { Interaction } from 'src/interactions/entities/interaction.entity'
import { User } from 'src/users/entities/user.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  dateTime: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  area: string

  @Column()
  image: string

  @ManyToOne(() => User, (user) => user.posts, { eager: true })
  @JoinColumn()
  user: User

  @OneToMany(() => Interaction, (interaction) => interaction.post)
  interactions: Interaction[]
}
