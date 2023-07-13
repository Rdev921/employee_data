const express = require('express');
const {EmpModel} = require('../model/emp.model');
const EmpRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
EmpRouter.post('/signup',async(req,res)=>{
    const{email,password}= req.body;
    try {
        //plain to hash
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(400).json({err:err.message})
            }else{
                const user = new EmpModel({email,password:hash,confirmPassword:hash});
                await user.save();
                res.status(200).json({msg:'user registered',addedUser:req.body});
            }
        })
       
    } catch (error) {
        res.status(400).json({error:error.message})
    }


})

EmpRouter.post('/login',async(req,res)=>{
    const{email,password}= req.body;
    try {
        //find the user with the help of email
        const user = await EmpModel.findOne({email});
        if(user){
            //hash to again plain
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    var token = jwt.sign({course:'backend'},'empData',{
                       
                    })
                 res.status(200).json({msg:'Login Successful',token:token});  //token:"abc@123"
                }else{
                 res.status(200).json({msg:'Invalid Credentials'});
                }
            })

        }else{
            res.status(200).json({msg:'invalid email or password'});
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }

})

module.exports = {EmpRouter};