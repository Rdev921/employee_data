const mongoose = require('mongoose');

const EmpSchema = mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String

},{
    versionKey:false
})

const EmpModel = mongoose.model('emp',EmpSchema);
module.exports = {EmpModel};