const express = require('express');
const {connection} = require('./db');
const { EmpRouter } = require('./routes/emp.route');
const {auth}  = require('../middleware/auth.middleware')
const { AddEmpRouter } = require('./routes/addemp.route');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/employee',EmpRouter);
app.use(auth);
app.use('/employees',AddEmpRouter);
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`Server is running on port ${process.env.port}`);
        console.log('connected to db');
    } catch (error) {
        console.log('something went wrong!');
    
    }
})