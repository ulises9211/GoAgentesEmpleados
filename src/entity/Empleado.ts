import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Escolaridad} from "./Escolaridad";
import {Estacion} from "./Estacion";
import {EstadoCivil} from "./EstadoCivil";
import {EstadoEscolaridad} from "./EstadoEscolaridad";
import {MedioTraslado} from "./MedioTraslado";
import {Pais} from "./Pais";
import {Colonia} from "./Colonia";
import {Puesto} from "./Puesto";
import {Usuario} from "./Usuario";
import {Etapa} from "./Etapa";
import {SolicitudRRHH} from "./SolicitudRRHH";
import {EstadoRH} from "./EstadoRH";

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Etapa)
    @JoinColumn({ name: "IdEtapa" })
    Etapa: Etapa;

    @ManyToOne(() => Escolaridad)
    @JoinColumn({ name: "IdEscolaridad" })
    Escolaridad: Escolaridad;

    @ManyToOne(() => Estacion)
    @JoinColumn({ name: "IdEstacion" })
    Estacion: Estacion;

    @ManyToOne(() => EstadoRH)
    @JoinColumn({ name: "IdEstadoRH" })
    EstadoRH: EstadoRH;

    @ManyToOne(() => EstadoCivil)
    @JoinColumn({ name: "IdEstadoCivil" })
    EstadoCivil: EstadoCivil;
    
    @ManyToOne(() => EstadoEscolaridad)
    @JoinColumn({ name: "IdEstadoEscolaridad" })
    EstadoEscolaridad: EstadoEscolaridad;

    @ManyToOne(() => MedioTraslado)
    @JoinColumn({ name: "IdMedioTraslado" })
    MedioTraslado: MedioTraslado;

    @ManyToOne(() => SolicitudRRHH)
    @JoinColumn({ name: "IdSolicitudRRHH" })
    SolicitudRRHH: SolicitudRRHH;

    @ManyToOne(() => Pais)
    @JoinColumn({ name: "IdPais" })
    Pais: Pais;
    
    @Column()
    Nombre: string;

    @Column()
    apellidoPaterno: string;

    @Column()
    apellidoMaterno: string;

    @Column()
    fechaNacimiento: Date;

    @Column()
    email: string;

    @Column()
    curp: string;

    @Column()
    genero: string;

    @Column()
    cp: number;

    @ManyToOne(() => Colonia)
    @JoinColumn({ name: "IdColonia" })
    Colonia: Colonia;

    @Column()
    calle: string;

    @Column()
    numeroExterior: string;

    @Column()
    numeroInterior: string;

    @Column({type: "double"})
    telefonoFijo;

    @Column( {type: "double"})
    telefonoMovil;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaBaja: Date;

    @Column()
    tiempoTraslado: number;

    @Column()
    recontratable: boolean;

    @Column()
    detalleBaja: string;

    @Column()
    fechaRegistroBaja: Date;

    /*@ManyToOne(() => Puesto)
    @JoinColumn({ name: "IdPuesto" })
    Puesto: Puesto;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "IdUsuario" })
    Usuario: Usuario;

    @Column()
    sueldoDiario: number;

    @Column()
    telefonoOficina: number;

    @Column()
    sueldoMensual: number;

    @Column()
    ctaClave: number;

    @Column()
    imss: number;
    
    @Column()
    rfc: number;
    
    @Column()
    numeroCedula: number;*/

}
