import { IsEmail, IsNotEmpty } from 'class-validator';
export class LoginDto {
    @IsNotEmpty()
    readonly user_id: string;
    @IsNotEmpty()
    readonly timein : string;


    
    
    // readonly timeout : string;
    
    
}