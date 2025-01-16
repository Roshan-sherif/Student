const express =require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', (req,res)=>{
    const LoginData = req.body.loginData

    adminController.adminLogin(LoginData,res)
    
})

module.exports = router;
