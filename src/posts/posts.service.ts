import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityNotFoundError, Repository } from 'typeorm'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post } from './entities/post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) {}

  create(CreatePostDto: CreatePostDto) {
    const post = this.postRepo.create(CreatePostDto)
    return this.postRepo.save(post)
  }

  findAll() {
    return this.postRepo.find()
  }

  findOne(id: number) {
    return this.postRepo.findOne({ where: { id: id } })
  }

  async update(id: number, UpdatePostDto: UpdatePostDto) {
    const updateResult = await this.postRepo.update(id, UpdatePostDto)
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Post, id)
    }
    return this.postRepo.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    const deleteResult = await this.postRepo.delete(id)
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Post, id)
    }
  }
}
