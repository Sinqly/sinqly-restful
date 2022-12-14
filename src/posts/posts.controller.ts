import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(
    @Body()
    createPostDto: CreatePostDto,
  ) {
    return this.postsService.create(createPostDto)
  }

  @Get()
  findAll() {
    return this.postsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id)
  }

  @Get('/user/:id')
  findByUserId(@Param('id') id: string) {
    return this.postsService.findByUserId(+id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    UpdatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(+id, UpdatePostDto)
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id)
  }
}
