import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}
