import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    name: string;

    @IsString()
    @Column()
    address: string;

}