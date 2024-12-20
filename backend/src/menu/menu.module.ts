import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Employee} from "../employee/entities/employee.entity";
import {Menu} from "./entities/menu.entity";

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [TypeOrmModule.forFeature([Menu])],
  exports: [MenuService],
})
export class MenuModule {}
