import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Menu} from "./entities/menu.entity";
import {Repository} from "typeorm";

@Injectable()
export class MenuService {

  constructor(
      @InjectRepository(Menu)
      private menuRepository: Repository<Menu>,
  ) {
  }
  async create(createMenuDto: CreateMenuDto) {
    try {
      const restaurant = this.menuRepository.create(createMenuDto);
      return await this.menuRepository.save(restaurant);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while creating a menu', error);
    }
  }

  async findAll() {
    try {
      return await this.menuRepository.find();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while finding All menu', error);
    }  }

  async findOne(menuId: number) {
    try {
      return await this.menuRepository.findOne({where : {id:menuId}});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while finding the menu with id:${menuId}`)
    }
  }

  async update(menuId: number, updateMenuDto: UpdateMenuDto) {
    try{
      return await this.menuRepository.update(menuId, updateMenuDto);
    }catch(error){
      console.error(error);
      throw new InternalServerErrorException('an error occurred while updating an menu', error);
    }  }

  async remove(menuId: number) {
    try {
      return await this.menuRepository.delete(menuId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while removing the menu id : ${menuId}`, error);
    }  }
}
