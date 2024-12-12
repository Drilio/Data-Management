import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Client} from "./entities/client.entity";
import {Repository} from "typeorm";

@Injectable()
export class ClientService {
  constructor(
      @InjectRepository(Client)
      private readonly clientRepository: Repository<Client>,

  ) {
  }
  async create(createClientDto: CreateClientDto) {
    try {
      const restaurant = this.clientRepository.create(createClientDto);
      return await this.clientRepository.save(restaurant);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while creating a client', error);
    }  }

  async findAll() {
    try {
      return await this.clientRepository.find();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('an error occurred while finding All client', error);
    }  }

  async findOne(clientId: number) {
    try {
      return await this.clientRepository.findOne({where : {id:clientId}});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while finding the client with id:${clientId}`)
    }  }

  async update(clientId: number, updateClientDto: UpdateClientDto) {
    try{
      return await this.clientRepository.update(clientId, updateClientDto);
    }catch(error){
      console.error(error);
      throw new InternalServerErrorException('an error occurred while updating an client', error);
    }  }

  async remove(clientId: number) {
    try {
      return await this.clientRepository.delete(clientId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`an error occurred while removing the client id : ${clientId}`, error);
    }  }
}
