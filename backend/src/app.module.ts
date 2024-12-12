import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import dbConfiguration from './config/db.config';
import {TypeOrmModule} from "@nestjs/typeorm";
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './src/config/.env.dev',
    load: [dbConfiguration],
  }),
    TypeOrmModule.forRootAsync({
    inject: [ConfigService],

    useFactory: (configService: ConfigService) => ({
      ...configService.get('database'),
    }),
  }),
    RestaurantModule,
    EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
