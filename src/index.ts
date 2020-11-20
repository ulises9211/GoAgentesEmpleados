import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
const cors = require("cors");
import router from './routes/routes';
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/empleados', router);

//Conexion a la BD
createConnection();

 //conexion con el servidor
 app.listen(3000, function () {
    console.log('Pueto:', 3000);
});
