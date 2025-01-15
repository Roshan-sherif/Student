const bycrpt =require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

const predefinedAdmin={
    username:'admin',
    password:'admin123'
}
const adminLogin=async(req,res)=>{
const {username, password} =req.body
try{
    const admin= await Admin.findOne({username})
    if(!Admin){
        return res.status(400).json({message:'Invalid username or password'})
    }
    const isMatch= await bycrpt.compare(password, admin.password)
if(!isMatch){
    return res.status(400).json({message:'invalid username or password'})
}
const token =jwt.sign({adminId:admin._id}, process.env.JWT_SECRET, {
    expiresIn:'1h'
})
res.json({token})
}catch(error){
    res.status(500).json({message:'server err'})
}

}
module.exports = {
    adminLogin,
  };
  