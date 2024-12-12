import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";
import {Supplier} from "../../supplier/entities/supplier.entity";
import {Menu} from "../../menu/entities/menu.entity";
import {Stock} from "../../stock/entities/stock.entity";
import {Client} from "../../client/entities/client.entity";
import {Employee} from "../../employee/entities/employee.entity";

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

    @OneToOne(() => Supplier)
    @JoinColumn()
    supplier: Supplier;

    @OneToMany(() => Menu, (menu) => menu.restaurant)
    menus: Menu[];

    @OneToMany(() => Stock, (stock) => stock.restaurant)
    stocks: Stock[];

    @OneToMany(() => Client, (client) => client.restaurant)
    clients: Client[];

    @OneToMany(() => Employee, (employee) => employee.restaurant)
    employees: Employee[];
}