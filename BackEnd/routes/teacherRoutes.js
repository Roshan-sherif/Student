const express =require('express');
const teacherController = require('../controllers/teacherController');
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post('/login',(req,res)=>{
teacherController.loginClass(req.body).then((data)=>{
    console.log('hello')
    const token = jwt.sign(
        { userId: data.user._id, role: "teacher", classUserId: data.user.classUserId },
        process.env.JWT_KEY,
        { expiresIn: "3h" }
    );
    console.log(token)
res.json({status:true, data,token})
}).catch((err)=>{
    console.log(err)
res.json({status:false, err})
})
})

module.exports=router