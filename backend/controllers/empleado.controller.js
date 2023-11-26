
const { json } = require('express');
const Empleado = require('../models/empleado')
const empleadoCtrl={};

//Obtencion de todos los empleados
empleadoCtrl.getEmpleados=async(req,res,next)=>{
    const empleados =await Empleado.find();
    res.json(empleados);
    next()
}

//Crear empleado
empleadoCtrl.createEmpleados = async(req,res,next)=>{
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        status:'Empleado guardado'
    });
    next()
}
 
//Conseguir solo un empleado 
empleadoCtrl.getUnicoEmpleado=async(req,res,next) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
    next()
};

//Actualizar Empleado 
empleadoCtrl.editarEmpleado = async(req,res,next)=>{
    const {id} =req.params;
    const empleadoEdit={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salry:req.body.salry,
    };
    await Empleado.findByIdAndUpdate(id,{$set:empleadoEdit},{new:true});
    res.json({status:'Empleado actualizado'});
    next()
}

//Eliminar Empleado
empleadoCtrl.eliminarEmpleado=async(req,res,next)=>{
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status:'Empleado Eliminado'})
    next()
}

module.exports=empleadoCtrl;



