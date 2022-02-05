
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders  } from 'src/databaseConfig/entities.providers';

@Module({
    controllers :[UsersController],
    providers: [UsersService, ...usersProviders] ,
    exports: [UsersService] 
})

export class UsersModule{}