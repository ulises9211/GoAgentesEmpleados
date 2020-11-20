import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Transporte {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    medio: string;

    @Column()
    activo: boolean;

}
