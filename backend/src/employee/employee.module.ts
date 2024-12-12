import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Restaurant} from "../restaurant/entities/restaurant.entity";
import {Employee} from "./entities/employee.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
