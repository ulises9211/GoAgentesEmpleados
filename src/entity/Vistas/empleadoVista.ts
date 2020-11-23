import {ViewEntity, ViewColumn, Connection} from "typeorm";
import { Empleado } from "../Empleado";
import { Escolaridad } from "../Escolaridad";
import { Estacion } from "../Estacion";
import { EstadoCivil } from "../EstadoCivil";
import { EstadoEscolaridad } from "../EstadoEscolaridad";
import { MedioTraslado } from "../MedioTraslado";
import { Pais } from "../Pais";

@ViewEntity({ 
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("empleado.id", "id")
        .addSelect("empleado.nombre", "nombre")
        .addSelect("empleado.apellidoPaterno", "apellidoPaterno")
        .addSelect("empleado.apellidoMaterno", "apellidoMaterno")
        .addSelect("empleado.fechaNacimiento", "fechaNacimiento")
        .addSelect("empleado.email", "email")
        .addSelect("empleado.curp", "curp")
        .addSelect("empleado.genero", "genero")
        .addSelect("empleado.cp", "cp")
        //.addSelect("empleado.colonia", "colonia")
        .addSelect("empleado.calle", "calle")
        .addSelect("empleado.numeroExterior", "numeroExterior")
        .addSelect("empleado.numeroInterior", "numeroInterior")
        .addSelect("empleado.telefonoFijo", "telefonoFijo")
        .addSelect("empleado.telefonoMovil", "telefonoMovil")
        .addSelect("escolaridad.nivel", "nivel")
        .addSelect("estacion.lineas", "estacion") 
        .addSelect("estado_civil.descripcion", "estado_civil") 
        .addSelect("estado_escolaridad.nivel", "estado_escolaridad") 
        .addSelect("medio_traslado.id", "medio_traslado") 
        .addSelect("pais.nombre", "pais")
        .from(Empleado, "empleado")
        .leftJoin(Escolaridad, "escolaridad", "escolaridad.id = empleado.IdEscolaridad")
        .leftJoin(Estacion, "estacion", "estacion.id = empleado.IdEstacion")
        .leftJoin(EstadoCivil, "estado_civil", "estado_civil.id = empleado.IdEstadoCivil")
        .leftJoin(EstadoEscolaridad, "estado_escolaridad", "estado_escolaridad.id = empleado.IdEstadoEscolaridad")
        .leftJoin(MedioTraslado, "medio_traslado", "medio_traslado.id = empleado.IdMedioTraslado")
        .leftJoin(Pais, "pais", "pais.id = empleado.IdPais")
      
})
export class EmpleadoVista {

    @ViewColumn()
    id: number;

    @ViewColumn()
    nombre: string;

    @ViewColumn()
    apellidoPaterno: string;

    @ViewColumn()
    apellidoMaterno: string;

    @ViewColumn()
    fechaNacimiento: Date;

    @ViewColumn()
    email: string;

    @ViewColumn()
    curp: string;

    @ViewColumn()
    genero: string;

    @ViewColumn()
    cp: string;

    @ViewColumn()
    calle: string;

    @ViewColumn()
    numeroExterior: string;

    @ViewColumn()
    numeroInterior: string;

    @ViewColumn()
    telefonoFijo;

    @ViewColumn()
    telefonoMovil;

    @ViewColumn()
    nivel: string;

    @ViewColumn()
    estacion: string;

    @ViewColumn()
    estado_civil: string;

    @ViewColumn()
    estado_escolaridad: string;

    @ViewColumn()
    medio_traslado: string;

    @ViewColumn()
    pais: string;

}
