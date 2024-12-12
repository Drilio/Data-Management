import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber, IsString} from "class-validator";

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
}
