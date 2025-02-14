const mongoose= require('mongoose')

const ClassesLoginSchema= new mongoose.Schema({
    classUserId:{type:String ,required:true},
    password:{type:String ,required:true},
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Classes",required: true },
    
})
const ClassesLogin =mongoose.model('ClassesLogin', ClassesLoginSchema)
module.exports=ClassesLogin
