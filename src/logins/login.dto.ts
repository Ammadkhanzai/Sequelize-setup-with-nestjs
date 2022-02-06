import { IntegerDataType } from 'sequelize/dist';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class LoginDto {
    @IsNotEmpty()
    readonly user_id: IntegerDataType;
    @IsNotEmpty()
    readonly timein : Date;


    
    
    // readonly timeout : string;
    
    
}