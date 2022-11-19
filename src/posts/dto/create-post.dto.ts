import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreatePostDto {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  dateTime: string

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  title: string

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  description: string

  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  area: string

  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  image: string
}
