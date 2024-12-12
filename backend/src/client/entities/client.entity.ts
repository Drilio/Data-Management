import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";

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
}
