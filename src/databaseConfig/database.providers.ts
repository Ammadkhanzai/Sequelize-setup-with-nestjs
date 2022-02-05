import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import 'dotenv/config';

import { Complaint } from 'src/entities/complaint.entity';
import { InputText } from 'src/entities/inputText.entity';
import { User } from 'src/entities/user.entity';
import { Login } from 'src/entities/login.entity';
import { Permission } from 'src/entities/permission.entity';
import { RolePermissionPivot } from 'src/entities/rolePermissionPivot.entity';
import { Role } from 'src/Entities/role.entity';
import { UserRolePivot } from 'src/entities/userRolePivot.entity';
import { InputTextValue } from 'src/entities/inputTextValue.entity';

export const databaseProviders = [{
   provide: 'SEQUELIZE',
   useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
         case 'DEVELOPMENT':
            config = databaseConfig.development;
            break;
         case 'TEST':
            config = databaseConfig.test;
            break;
         case 'PRODUCTION':
            config = databaseConfig.production;
            break;
         default:
            config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      await sequelize.drop();
      sequelize.addModels(
         [
            User,
            Login,
            Complaint, 
            Role, 
            Permission, 
            RolePermissionPivot, 
            UserRolePivot,
            InputText,
            InputTextValue,

         ]
      );
      await sequelize.sync();
      
      return sequelize;
   },
}];