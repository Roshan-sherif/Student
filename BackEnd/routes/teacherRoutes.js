const express =require('express');
const teacherController = require('../controllers/teacherController');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { route } = require('./adminRoutes');


router.post('/login',(req,res)=>{
teacherController.loginClass(req.body).then((data)=>{
    console.log(data)
    const token = jwt.sign(
        { userId: data.user._id, role: "teacher", classUserId: data.user.classUserId ,classId:data.user.classId },
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
router.post('/add-students',(req,res)=>{
    console.log(req.body)
    teacherController.addStudent(req.body)  

})
router.post('/fetch-class',(req,res)=>{
    console.log(req.body)
    teacherController.fetchClass(req.body).then((data)=>{
        res.json({status: true, data})

    })
})

module.exports=router