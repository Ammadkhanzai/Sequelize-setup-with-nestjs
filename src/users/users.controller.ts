
import { Controller , Post , Body, Get , Param , Patch} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginDto } from './dto/login.dto';



@Controller('users')
export class UsersController {


    constructor (private readonly usersService : UsersService){}

    @Post('add')
    addUser(
        @Body() loginDto : LoginDto,
    ): Object {
        console.log("user servie:::",this.usersService);
        console.log("logindto",loginDto);
        const userID = this.usersService.populateUser(loginDto);
        return { 
            status: 'success',
            code: '204',
            user_id : userID,
        }
    }


    // @Post('add')
    // addUser(
    //     @Body() userDto : CreateUserDto,
    // ): Object {

    //     const userID = this.usersService.populateUser(userDto);
    //     return { 
    //         status: 'success',
    //         code: '204',
    //         user_id : userID,
    //     }
    // }

    // @Get()
    // getUsers() {
    //     return this.usersService.fetchUsers();
    // }   

    // @Get(':id')
    // getUser(@Param('id') id : string ) {
    //     return this.usersService.fetchUserById(id);
    // }

    // @Patch(':id')
    // modifyUser(
    //     @Param('id') id : string , 
    //     @Body('username') username :string , 
    //     @Body('email') email :string , 
    //     @Body('password') password :string ,  
    // ){
    //     return this.usersService.updateUser(id,username,email,password);

    // }
    
}