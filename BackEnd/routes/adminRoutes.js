const express =require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');
const checkAuth =require('../middleware/authMiddleware');
const { redirect } = require('react-router-dom');
router.post('/login', async(req,res)=>{

    console.log('helo')
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
        console.log(responce)
    return res.status(401).json(responce);

   }

}catch(error){
    console.error(error);
    return res.status(500).json({ message: 'Server error' });

}
})
router.get('/',checkAuth, (req,res)=>{
    console.log(req.user.role)
if(req.user.role==='admin'){
res.json({status: true, redirect:'/admin/' })
}else{
    res.json({status: false, redirect:'/login/admin' })

}
})

module.exports = router;
