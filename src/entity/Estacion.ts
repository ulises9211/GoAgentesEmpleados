import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Transporte} from "./Transporte";
@Entity()
export class Estacion {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Transporte)
    @JoinColumn({ name: "IdTransporte" })
    Transporte: Transporte;

    @Column()
    estacion: string;

    @Column()
    lineas: string;

}
