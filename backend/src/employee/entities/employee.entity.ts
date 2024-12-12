import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber, IsString} from "class-validator";
import {position} from "../../enum/position";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    name: string;

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

    @IsNumber()
    salary: number;
}
