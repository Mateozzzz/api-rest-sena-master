const mongoose = require('mongoose')
const { Schema } = mongoose;

const EmpleadosSchema = new Schema({
    name : {type:String, require:true},
    position : {type:String, require:true},
    office : {type:String, require:true},
    salary : {type:Number, require:true},
});

module.exports = mongoose.model('Empleado', EmpleadosSchema);