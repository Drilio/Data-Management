import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber} from "class-validator";

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
}
