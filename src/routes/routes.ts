import * as express from "express";
const app = express();
import routerEmpleado from '../routes/empleado.route';

//Rutas empleado
app.use('/', routerEmpleado);

export default routerEmpleado;