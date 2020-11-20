import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Escolaridad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nivel: string;

    @Column()
    activo: boolean;

}
