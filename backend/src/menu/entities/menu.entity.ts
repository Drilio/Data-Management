import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber, IsString} from "class-validator";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsNumber()
    price: number;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
    restaurant: Restaurant;
}
