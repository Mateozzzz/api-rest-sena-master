//Creacion de la REST-API
const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const cors = require('cors');
const router = require('./routes/empleado.route');
const { createEmpleados, getEmpleados, getUnicoEmpleado, editarEmpleado, eliminarEmpleado } = require('./controllers/empleado.controller');
const app = express();


//Configuaraciones
app.set('port', process.env.PORT || 3000);
app.use(cors({origin:'http:/localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/empleados',require('./routes/empleado.route'));

//Rutas del servidor 
/*app.use('/api/empleados',(getEmpleados,createEmpleados)=>{
    res.json({ status:'Activo' });
    next()
});*/

app.use(getEmpleados)
app.use(createEmpleados)
app.use(getUnicoEmpleado)
app.use(editarEmpleado)
app.use(eliminarEmpleado)




//Incio de Servidor 
app.listen(app.get('port'),()=>{
console.log(`Server is listening on`, app.get('port'));
})

