const mongoose =require('mongoose')

const adminSchema =new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    password: { type: String, required: true },
})
module.exports=mongoose.model("Admin",adminSchema)
adminSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    const salt =await bcrypt.genSalt(10)
    this.password=await bycrpt.hash(this.password, salt)

})
const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin;
