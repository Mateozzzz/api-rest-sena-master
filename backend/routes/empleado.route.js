const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

/*router.get('/api/empleados',(req,res,next)=>{
    res.json({ user: 'Mateo' });
});*/


router.get('/api/empleados',empleadoCtrl.getEmpleados);
router.post('/api/empleados',empleadoCtrl.createEmpleados);
router.get('/api/empleados',empleadoCtrl.getUnicoEmpleado);      
router.put('/api/empleados',empleadoCtrl.editarEmpleado);
router.get('/api/empleados',empleadoCtrl.eliminarEmpleado);


module.exports= router;