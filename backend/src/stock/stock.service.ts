import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  constructor(
      @InjectRepository(Stock)
      private readonly stockRepository: Repository<Stock>,
  ) {}

  // Création d'un nouveau stock
  async create(createStockDto: CreateStockDto): Promise<Stock> {
    const newStock = this.stockRepository.create(createStockDto);
    return await this.stockRepository.save(newStock);
  }

  // Récupérer tous les stocks
  async findAll(): Promise<Stock[]> {
    return await this.stockRepository.find();
  }

  // Récupérer un stock par ID
  async findOne(id: number): Promise<Stock> {
    const stock = await this.stockRepository.findOne({ where: { id } });
    if (!stock) {
      throw new NotFoundException(`Stock with ID ${id} not found`);
    }
    return stock;
  }

  // Mise à jour d'un stock par ID
  async update(id: number, updateStockDto: UpdateStockDto): Promise<Stock> {
    const stock = await this.findOne(id); // Vérifie si le stock existe
    Object.assign(stock, updateStockDto); // Met à jour les champs
    return await this.stockRepository.save(stock);
  }

  // Suppression d'un stock par ID
  async remove(id: number): Promise<void> {
    const stock = await this.findOne(id); // Vérifie si le stock existe
    await this.stockRepository.remove(stock);
  }
}
