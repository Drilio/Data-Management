import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";
import {Order} from "../../order/entities/order.entity";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    name: string;

    @IsString()
    @Column()
    email: string;

    @IsString()
    @Column()
    phone_number: string;

    @IsString()
    @Column()
    address: string;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.clients)
    restaurant: Restaurant;

    @OneToMany(() => Order, (order) => order.client)
    orders: Order[];
}
