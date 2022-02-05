import { Injectable , Inject , NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { LoginDto } from "./dto/login.dto";
import { User } from "src/entities/user.entity";
import { Login } from "src/entities/login.entity";

@Injectable()
export class UsersService {

    constructor(
        @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
        @Inject('LOGIN_REPOSITORY') private readonly loginRepository: typeof Login  
    ){ }

    

    // private users: User[] = [];
    
    // populateUser( 
    //     username: string , 
    //     email : string , 
    //     password : string 
    // ): string {

    //     const userID = Math.random().toString();
    //     const newUser = new User( userID , username , email , password );
    //     this.users.push(newUser);
    //     return userID;
    // }

    // fetchUsers(): User[] {
    //     return this.users;
    // }

    // async populateUser(user: CreateUserDto ): Promise<User> {
    //     return await this.userRepository.create<User>(user);
    // }
    async populateUser(login: LoginDto): Promise<Login> {
        console.log('loggger',login);

        // return await Login.create(login);
        return await this.loginRepository.create<Login>(login);
    }

    // fetchUserById( id: string): User{
    //     const user = this.users.find( user => user.id == id );
    //     if(!user) throw new NotFoundException("User not found!");
    //     return user;
    // }
    

    // updateUser( id : string , username :string , email : string, password :string ){

    //     const index = this.users.findIndex( user => user.id == id );
    //     const user = this.users.find( user => user.id == id );
        
    //     const updatedUser = {...user};

    //     if(username) updatedUser.username = username;
    //     if(email) updatedUser.email = email;
    //     if(password) updatedUser.password = password;

    //     return this.users[index] = updatedUser;
    
    // }

}