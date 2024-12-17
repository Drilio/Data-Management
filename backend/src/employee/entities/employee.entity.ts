import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber, IsString} from "class-validator";
import {position} from "../../enum/position";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    lastName: string;

    @IsString()
    @Column()
    firstName: string;

    @Column({type:"enum", enum: position})
    position:position;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    date_of_hire:Date;

    @Column()
    @IsNumber()
    salary: number;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.employees)
    restaurant: Restaurant;
}
