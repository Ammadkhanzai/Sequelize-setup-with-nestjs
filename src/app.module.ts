import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
// import { LoginsModule } from './logins/logins.module';
// import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './databaseConfig/database.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    // LoginsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
