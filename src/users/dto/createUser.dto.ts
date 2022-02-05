import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    readonly name: string;
    @IsEmail()
    readonly email : string;
    @IsNotEmpty()
    readonly password: string;
    @IsNotEmpty()
    readonly gender: string;
}