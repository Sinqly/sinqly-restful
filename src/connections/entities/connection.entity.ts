import { User } from 'src/users/entities/user.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'

@Entity()
export class Connection {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, (user) => user.connections)
  user1: User

  @ManyToOne(() => User, (user) => user.connections2)
  user2: User
}
