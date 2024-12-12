import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber} from "class-validator";
import {Client} from "../../client/entities/client.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    order_date:Date;

    @IsNumber()
    @Column()
    total_amount: number;

    @ManyToOne(() => Client, (client) => client.orders)
    client: Client;
}
