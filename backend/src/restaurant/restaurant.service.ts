import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import {Restaurant} from "./entities/restaurant.entity";
import {Repository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RestaurantService {

  constructor(
      @InjectRepository(Restaurant)
      private readonly restaurantRepository: Repository<Restaurant>, ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    try {
      const restaurant = this.restaurantRepository.create(createRestaurantDto);
      return await this.restaurantRepository.save(restaurant);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while creating a restaurant', error);
    }
  }

  async findAll() {
    try {
      return await this.restaurantRepository.find({
        relations: ['supplier', 'menus', 'stocks', 'clients', 'employees'],
      });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while finding All restaurants', error);
    }
  }

  async findOne(restaurantId: number) {
    try {
      return await this.restaurantRepository.findOne({where : {id:restaurantId},relations: ['supplier', 'menus', 'stocks', 'clients', 'employees'],});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while finding the restaurant with id:${restaurantId}`)
    }
  }

  async update(restaurantId: number, updateRestaurantDto: UpdateRestaurantDto) {
    try{
      return await this.restaurantRepository.update(restaurantId, updateRestaurantDto);
    }catch(error){
      console.error(error);
      throw new InternalServerErrorException('an error occurred while updating an restaurant', error);
    }
  }

  async remove(restaurantId: number) {
    try {
      return await this.restaurantRepository.delete(restaurantId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while removing the restaurant id : ${restaurantId}`, error);
    }
  }
}
