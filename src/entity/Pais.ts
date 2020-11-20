import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Pais {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nombre: string;

    @Column()
    activo: boolean;

}
