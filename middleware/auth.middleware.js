const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const token = req.headers.authorization ?.split(" ")[1]
    if(token){
        try {
            const decoded = jwt.verify(token,'empData');
        if(decoded){
            next();
        }else{
            res.json({msg:'Token not recognized'});
        }
        } catch (error) {
            res.json({err:err.message});
        }
        
    }else{
        res.json({msg:'Please Login'});
    }

}
module.exports = {auth}