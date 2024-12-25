import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty() 
    name: string;
    
    @IsString()
    @IsNotEmpty() 
    @IsEmail()
    email: string;
    
    @IsString()
    @IsNotEmpty() 
    password: string;
}
