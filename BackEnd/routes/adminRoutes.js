const express =require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');
const checkAuth =require('../middleware/authMiddleware')
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
    return res.status(401).json(response);

   }

}catch(error){
    console.error(error);
    return res.status(500).json({ message: 'Server error' });

}
})
router.get('/',checkAuth, (req,res)=>{
    console.log("checkAuth")
if(checkAuth.user==='admin'){

}
})

module.exports = router;
