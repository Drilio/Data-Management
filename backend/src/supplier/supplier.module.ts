import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Restaurant} from "../restaurant/entities/restaurant.entity";
import {Supplier} from "./entities/supplier.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SupplierController],
  providers: [SupplierService],
  exports: [SupplierService],
})
export class SupplierModule {}
