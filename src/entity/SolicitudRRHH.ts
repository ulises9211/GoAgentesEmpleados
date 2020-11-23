import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class SolicitudRRHH {

    @PrimaryGeneratedColumn()
    id: number;

}
