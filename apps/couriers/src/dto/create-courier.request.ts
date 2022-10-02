import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourierRequest {
  @IsString()
  @IsNotEmpty()
  courierId: string;

  @IsString()
  @IsNotEmpty()
  latitude: string;

  @IsString()
  @IsNotEmpty()
  longitude: string;
}
