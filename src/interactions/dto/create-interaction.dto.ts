import { IsString, MaxLength, IsBoolean } from 'class-validator';

export class CreateInteractionDto {
  @MaxLength(255)
  @IsString()
  comment: string;

  @IsBoolean()
  like: boolean;

}
