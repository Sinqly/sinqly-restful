import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreateUserDto {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  name: string

  @MaxLength(150)
  @IsString()
  @IsNotEmpty()
  lastName: string

  @MaxLength(150)
  @IsString()
  @IsNotEmpty()
  username: string

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  email: string

  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  password: string

  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  phone: string

  @MaxLength(14)
  @IsString()
  @IsNotEmpty()
  cpf: string

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  biography: string

  @IsString()
  profileImage: string
}
