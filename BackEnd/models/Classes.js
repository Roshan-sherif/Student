const mongoose= require('mongoose')

const classSchema= new mongoose.Schema({
    department:{type:String ,required:true},
    regulation: { type: Number, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
    semester: { type: Number, required: true },
    classTeacherName:{ type: String, required: true },
    classTeacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher",required: true }

})

const Classes =mongoose.model('Classes', classSchema)
module.exports=Classes
