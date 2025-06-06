const Classes = require("../models/Classes");
const ClassesLogin = require("../models/ClassesLogin")
const bcrypt = require('bcrypt');
const Student = require("../models/Student");

module.exports = {
    loginClass: (data) => {
        return new Promise(async (resolve, reject) => {
            const UserId = data.userId
            try {
                const user = await ClassesLogin.findOne({ classUserId: UserId })
                console.log(user)
                if (!user) {
                    reject({ status: false, msg: "User Name is Incorrect" })

                }
                const storedHashedPassword = user.password
                const isMatch = await bcrypt.compare(data.password, storedHashedPassword)
                console.log(isMatch)
                if (isMatch) {
                    resolve({ status: true, user })
                } else {
                    reject({ status: false, msg: "Password is Incorrect" })
                }


            } catch (err) {
                reject({ status: false, msg: err })
            }

        })
    },
    fetchClass: (classId) => {
        return new Promise(async (resolve, reject) => {
            const responce = await Classes.findOne(classId.classId)
            console.log(responce)
            resolve(responce)
        })
    },
    addStudent: (studentData) => {
        return new Promise(async (resolve, reject) => {
            console.log(studentData)
            const {
                reg,
                name,
                department,
                section,
                address,
                bloodGroup,
                dob,
                boardingPoint,
                contactNumber,
                parentNumber,
                regulation,
                startYear,
                endYear,
                semester,
                classid,
                gender,
                
            } = studentData.studentData

            const newStudent = new Student({
                reg,
                name,
                department,
                section,
                address,
                bloodGroup,
                dob,
                boardingPoint,
                contactNumber,
                parentNumber,
                regulation,
                startYear,
                endYear,
                semester,
                gender,
                classId:classid
            })
            
            const saveStudentDB = await newStudent.save()
            resolve()

        })
    }
}