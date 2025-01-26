const mongoose= require('mongoose')

const teacherSchema= new mongoose.Schema({
    name:{type:String ,required:true},
    register: { type: String, required: true },
    gender: { type: String, required: true },
    department: { type: String, required: true },
    subject: { type: String, required: true },
})

const Teacher =mongoose.model('Teahcer', teacherSchema)
module.exports=Teacher
