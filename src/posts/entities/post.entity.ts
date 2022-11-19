import { Interaction } from 'src/interactions/entities/interaction.entity'
import { User } from 'src/users/entities/user.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(() => User, (user) => user.posts)
  user: User

  @OneToMany(() => Interaction, (interaction) => interaction.post)
  interactions: Interaction[]
}
