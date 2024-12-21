import {Index} from "typeorm";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";
import {Order} from "../../order/entities/order.entity";
import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";
import {Order} from "../../order/entities/order.entity";

@Entity()
@Index(['email'], { unique: true })
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    lastName: string;

    @IsString()
    @Column()
    firstName: string;

    @IsString()
    @Column()
    email: string;

    @IsString()
    @Column()
    phone_number: string;

    @IsString()
    @Column()
    address: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    inscription_date:Date;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.clients)
    restaurant: Restaurant;

    @OneToMany(() => Order, (order) => order.client)
    orders: Order[];
}
