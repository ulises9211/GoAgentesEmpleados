import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class EstadoCivil {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    activo: boolean;

}
