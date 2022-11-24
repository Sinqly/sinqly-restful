import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreateUserDto {
  @MaxLength(100)
  @IsString()
  name: string

  @MaxLength(150)
  @IsString()
  lastName: string

  @MaxLength(150)
  @IsString()
  username: string

  @MaxLength(100)
  @IsString()
  email: string

  @MaxLength(30)
  @IsString()
  password: string

  @MaxLength(30)
  @IsString()
  phone: string

  @MaxLength(14)
  @IsString()
  cpf: string

  @MaxLength(255)
  @IsString()
  biography: string

  @IsString()
  profileImage: string
}
