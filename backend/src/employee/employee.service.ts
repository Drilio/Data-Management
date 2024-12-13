import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Employee} from "./entities/employee.entity";
import {Repository} from "typeorm";

@Injectable()
export class EmployeeService {

  constructor(
      @InjectRepository(Employee)
      private employeeRepository: Repository<Employee>,
  ){

  }
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const restaurant = this.employeeRepository.create(createEmployeeDto);
      return await this.employeeRepository.save(restaurant);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while creating a employee', error);
    }
  }

  async findAll() {
    try {
      return await this.employeeRepository.find({relations: ['restaurant']});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while finding All employee', error);
    }
  }

  async findOne(employeeId: number) {
    try {
      return await this.employeeRepository.findOne({where: {id: employeeId}, relations: ['restaurant']});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while finding the employee with id:${employeeId}`)
    }
  }

  async update(employeeId: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      return await this.employeeRepository.update(employeeId, updateEmployeeDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while updating an employee', error);
    }
  }

  async remove(employeeId: number) {
    try {
      return await this.employeeRepository.delete(employeeId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while removing the employee id : ${employeeId}`, error);
    }
  }
}
