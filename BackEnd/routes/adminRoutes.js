const express =require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');
const checkAuth =require('../middleware/authMiddleware');
const { redirect } = require('react-router-dom');
router.post('/login', async(req,res)=>{
    const LoginData = req.body.loginData

try{
   const responce =await adminController.adminLogin(LoginData)

   if(responce.success){
    res.cookie('token', responce.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'PRODUCTION',
        sameSite: 'Strict',
    });
    res.json(responce)
    }else{
    return res.status(401).json(responce);

   }

}catch(error){
    console.error(error);
    return res.status(500).json({ message: 'Server error' });

}
})
router.get('/authverify',checkAuth, (req,res)=>{
if(req.user.role==='admin'){
res.json({status: true, redirect:'/admin/' })
}else{
    res.json({status: false, redirect:'/login/admin' })

}
})
router.post('/add-teacher',(req,res)=>{
    adminController.addTeacher(req.body).then(()=>{
        res.json({status: true})
    }).catch(()=>{
        res.json({status: false})
    })

})
router.get('/teacher-view',(req,res)=>{
    adminController.getTeacher().then((teacherData)=>{
        res.json({status: true, teacherData})
    }).catch(()=>{
        console.log('somthing wrong')
    })
})
router.get('/get-teacher/:id',(req,res)=>{
    adminController.getTeacherforEdit(req.params.id).then((teacherData)=>{
        res.json({status:true, teacherData})
    }).catch(()=>{
        res.json({status:false, teacherData})

    })
})
router.post('/edit-teacher/:id',(req,res)=>{
adminController.editTeacher(req.body,req.body._id).then(()=>{
    res.json({status:true})
})
})
router.post('/dlt-teacher/:id',(req,res)=>{
    console.log(req.params)
    adminController.dltTeacher(req.params.id).then(()=>{
        res.json({status :true})
    })
})
module.exports = router;
