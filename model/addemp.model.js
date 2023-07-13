const mongoose = require('mongoose');

const AddEmpSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    salary:String

},{
    versionKey:false
})

const AddEmpModel = mongoose.model('addemp',AddEmpSchema);
module.exports = {AddEmpModel};