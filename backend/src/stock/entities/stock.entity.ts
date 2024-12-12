import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_name: string;

    @Column()
    Quantity: number;

    @Column()
    Delivery_Date: Date;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.stocks)
    restaurant: Restaurant;
}
