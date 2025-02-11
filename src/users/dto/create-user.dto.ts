import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  avatar: string;

  @IsEmail()
  email: string;
}
