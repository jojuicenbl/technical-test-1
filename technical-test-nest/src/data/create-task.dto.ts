import { IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsBoolean()
  completed: boolean;
}
