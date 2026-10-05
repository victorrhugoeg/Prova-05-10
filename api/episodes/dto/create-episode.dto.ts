import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateEpisodesDto {
  @IsString()
  @IsNotEmpty()
  show_name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @Min(0)
  duration: number;

  @IsString()
  @IsNotEmpty()
  audio_url: string;
}
