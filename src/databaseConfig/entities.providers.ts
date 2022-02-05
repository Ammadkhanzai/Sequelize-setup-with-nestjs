import { Role } from '../Entities/role.entity';
import { User } from '../entities/user.entity';
import { Login } from '../entities/login.entity';

// export const loginsProviders = [
//     {
//         provide: 'LOGIN_REPOSITORY',
//         useValue: Login
//     }
// ]


export const usersProviders = [
    {
        provide : 'USER_REPOSITORY',
        useValue: User
    },
    {
        provide: 'LOGIN_REPOSITORY',
        useValue: Login
    }
    
]

export const rolesProviders = [
    {
        provide : 'ROLE_REPOSITORY',
        useValue: Role
    }
]