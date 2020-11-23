import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class Etapa {

    @PrimaryGeneratedColumn()
    id: number;

}
