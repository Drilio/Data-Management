import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Supplier} from "./entities/supplier.entity";

@Injectable()
export class SupplierService {
  constructor(
      @InjectRepository(Supplier)
      private readonly supplierRepository: Repository<Supplier>,
  ) {
  }
  async create(createSupplierDto: CreateSupplierDto) {
    try {
      const restaurant = this.supplierRepository.create(createSupplierDto);
      return await this.supplierRepository.save(restaurant);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while creating a supplier', error);
    }  }

  async findAll() {
    try {
      return await this.supplierRepository.find();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while finding All supplier', error);
    }  }

  async findOne(supplierId: number) {
    try {
      return await this.supplierRepository.findOne({where : {id:supplierId}});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while finding the supplier with id:${supplierId}`)
    }  }

  async update(supplierId: number, updateSupplierDto: UpdateSupplierDto) {
    try{
      return await this.supplierRepository.update(supplierId, updateSupplierDto);
    }catch(error){
      console.error(error);
      throw new InternalServerErrorException('an error occurred while updating an supplier', error);
    }  }

  async remove(supplierId: number) {
    try {
      return await this.supplierRepository.delete(supplierId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while removing the supplier id : ${supplierId}`, error);
    }
  }
}
