import { getRepository } from "typeorm";
import { Empleado } from "../entity/Empleado";
import { EmpleadoVista } from "../entity/Vistas/empleadoVista";

    const mostrarEmpleados = async( req, res) => {
        const empleados = await getRepository(EmpleadoVista).find();
        console.log(empleados)
        res.json({
            ok:true,
            empleados
        });
    }

    const mostrarEmpleado = async( req, res) => {
        const empleado = await getRepository(EmpleadoVista).findOne({id: req.params.id});
        console.log(empleado);
        return res.send(empleado);
    }

    const crearEmpleado = async( req, res) => {
        const { categoryName, clasificacionName, commentName} = req.body;

        const empleado = new Empleado();

        // empleado.name = 'love';
        // const categoriaFind = await getRepository(Category).findOne(req.params.categoryName);
        // empleado.category = categoriaFind;
        // const clasificacionFind = await getRepository(Clasificcion).findOne(req.params.clasificacionName);
        // empleado.clasificacion = clasificacionFind;
        // const commentFind = await getRepository(Comments).findOne(req.params.scommentName);
        // empleado.comment = commentFind;

        // const newUsuario = await getRepository(Post).create(empleado);
        // console.log(newUsuario);
        // const saveUsuario = await getRepository(Post).save(newUsuario);
    }
   
export {mostrarEmpleados, crearEmpleado, mostrarEmpleado}
