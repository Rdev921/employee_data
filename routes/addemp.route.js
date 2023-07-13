const express = require('express');
const AddEmpModel = require('../model/addemp.model');

const { AddEmpModel } = require('../model/emp.model');
const AddEmpRouter = express.Router();

AddEmpRouter.post('/add',async(req,res)=>{
    try {
        const employee = await AddAdd.AddEmpModel(req.body);
        await employee.save();
        res.status(200).json({msg:"Employee Added Succesfully"});
    } catch (error) {
        res.status(400).json({err:err.message});
    }
})

AddEmpRouter.get('/',async(req,res)=>{
    try {
        const employess = await AddEmpModel.find();
        res.status(200).send(employess);
    } catch (error) {
        res.status(400).json({err:err.message});
    }
})
let updatedUser = {
    firstName: (req.body.firstName),
    lastName: (req.body.lastName),
    email: (req.body.email),
    salray: (req.body.salray)
  };

AddEmpRouter.patch('/update/:empID',async(req,res)=>{
    let {empID} = req.params;
    try {
        await AddEmpModel.findByIdAndUpdate({_id:empID},req.body);
        const employee = await AddEmpModel.find({_id:empID});
        res.status(200).json({msg:'data has been updated',employee:{
            _id: employee._id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            salary: employee.salary    
        }
        })
    } catch (error) {
        res.status(400).json({err:err.message});
    }
})

AddEmpRouter.patch('/delete/:empID',async(req,res)=>{
    let {empID} = req.params;
    try {
        const delEmployees = await AddEmpModel.find({_id:empID});
        await AddEmpModel.findByIdAndDelete({_id:empID});
        res.status(200).json({msg:'data has been updated',employee:delEmployees})
    } catch (error) {
        res.status(400).json({err:err.message});
    }
})

AddEmpRouter.get('/:search',async(req,res)=>{
    try {
        const employee = await AddEmpModel.find({"firstName":req.params.search})
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.json(employee);
    } catch (error) {
        console.error(err);
        res.status(500).send(`Error updating employee: ${err.message}`);
    }
})
module.exports = {AddEmpRouter}