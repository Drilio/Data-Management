import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Order} from "./entities/order.entity";

@Injectable()
export class OrderService {
  constructor(
      @InjectRepository(Order)
      private readonly orderRepository: Repository<Order>,
  ) {
  }
  async create(createOrderDto: CreateOrderDto) {
    try {
      const restaurant = this.orderRepository.create(createOrderDto);
      return await this.orderRepository.save(restaurant);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while creating a order', error);
    }  }

  async findAll() {
    try {
      return await this.orderRepository.find();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while finding All order', error);
    }  }

  async findOne(orderId: number) {
    try {
      return await this.orderRepository.findOne({where : {id:orderId}});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while finding the order with id:${orderId}`)
    }  }

  async update(orderId: number, updateOrderDto: UpdateOrderDto) {
    try{
      return await this.orderRepository.update(orderId, updateOrderDto);
    }catch(error){
      console.error(error);
      throw new InternalServerErrorException('an error occurred while updating an order', error);
    }  }

  async remove(orderId: number) {
    try {
      return await this.orderRepository.delete(orderId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while removing the order id : ${orderId}`, error);
    }
  }
}
