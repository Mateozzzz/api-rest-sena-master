const mongoose = require('mongoose')
    const uri='mongodb+srv://admin:admincontraseña@sena-cluster.bnjkoxw.mongodb.net/';
mongoose.connect(uri)
    .then(db =>console.log('La BD esta conectada'))
    .catch(err=>console.error('Algo va mal'));

    module.exports = mongoose;
    //http://localhost:3000/api/empleados
    //'mongodb://localhost/empleados'
