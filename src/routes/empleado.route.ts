import { crearEmpleado, mostrarEmpleados} from '../controllers/empleado.controller'
const Router = require('express');

const routerEmpleado = Router();

routerEmpleado.get('/', mostrarEmpleados);
//routerEmpleado.get('/:id', mostrarEmpleado);
routerEmpleado.post('/', crearEmpleado);

export default routerEmpleado;
