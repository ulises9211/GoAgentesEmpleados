import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class EstadoEscolaridad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nivel: string;

    @Column()
    activo: boolean;

}
