import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Colonia {

    @PrimaryGeneratedColumn()
    id: number;

}
