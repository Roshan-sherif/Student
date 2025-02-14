const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const Classes = require('../models/Classes');
const bcrypt =require('bcrypt');
const ClassesLogin = require('../models/ClassesLogin');
const saltRounds = 10;
module.exports = {

    adminLogin: async (userData, res) => {
        const jwtSecret = process.env.JWT_KEY
        try {
            const ADMIN_CREDENTIALS = {
                userId: process.env.ADMIN_USERID,
                password: process.env.ADMIN_PASSWORD,
            };
            if (ADMIN_CREDENTIALS.userId === userData.userId && ADMIN_CREDENTIALS.password === userData.password) {
                const token = jwt.sign(
                    { username: ADMIN_CREDENTIALS.userId, role: 'admin' },
                    `${jwtSecret}`,
                    { expiresIn: '3h' }
                );


                return ({ success: true, token, redirect: '/admin' });
            } else {

                return ({ message: 'Login unsuccessful' });
            }
        } catch (error) {

            console.error(error);
            return ({ message: 'Server error' });
        }
    },
    addTeacher: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { name, register, gender, department, subject } = data
                const newTeacher = new Teacher({
                    name,
                    register,
                    gender,
                    department,
                    subject
                })
                const saveTeacherDB = await newTeacher.save()
                console.log(saveTeacherDB)
                resolve(saveTeacherDB)

            } catch (error) {
                reject(error)
            }
        })
    },
    getTeacher: () => {
        return new Promise(async (resolve, reject) => {
            const viewTeacher = await Teacher.find()
            resolve(viewTeacher)
        })
    },
    getTeacherforEdit: (id) => {
        return new Promise(async (resolve, reject) => {
            const getTeacherDetails = await Teacher.findById(id)
            resolve(getTeacherDetails)
        })
    },
    editTeacher: (teacherData, id) => {
        return new Promise(async (resolve, reject) => {
            const teacherEdit = await Teacher.findByIdAndUpdate(id, teacherData, { new: true })
            resolve(teacherEdit)
        })
    },
    dltTeacher: (teacherId) => {
        return new Promise(async (resolve, reject) => {
            const dlt = await Teacher.deleteOne({ _id: teacherId })
            resolve(dlt)
        })
    },
    getTeacherforAddClasses: () => {
        return new Promise(async (resolve, reject) => {
            const getTeacher = await Teacher.find({}, { name: 1, _id: 1 })
            resolve(getTeacher)
        })
    }, createClass: (classData) => {
        return new Promise(async (resolve, reject) => {
            try {
                const teacher = await Teacher.findById(classData.classTeacherId);

                if (!teacher) {
                    return reject({ message: "Teacher Not Exist" });
                }
                const hashedPassword = await bcrypt.hash(classData.password, 10);
                
                const classTeacherName = teacher.name;
                const classUserId= classData.department+classData.startYear%100+classData.section
                console.log(classUserId)
                const { department,section, regulation, startYear, endYear, semester, classTeacherId } = classData;
                const newClasses = new Classes({
                    department,
                    section,
                    regulation,
                    startYear,
                    endYear,
                    semester,
                    classTeacherName,
                    classTeacherId,
                });

                const savedClass = await newClasses.save();
                const classId=savedClass._id
                console.log(hashedPassword)
                if(savedClass){
                    console.log(classUserId)
                    const ClassLogin = new ClassesLogin({
                        classUserId,
                        password:hashedPassword,
                        classId
                    });
                    const savedClassLogin = await ClassLogin.save();

    
                }
                resolve({savedClass});

            } catch (error) {
                console.error("Error creating class:", error);
                reject(error);
            }
        });
    }
    ,
    getClasses: () => {
        return new Promise(async (resolve, reject) => {
            const responce = await Classes.find()
            resolve(responce)
        })
    },
    getClassesAndTeacher: (clsId, teacherID) => {
        return new Promise(async (resolve, reject) => {
            try {
                const teacherDtls = await Teacher.find()
                const classDtls = await Classes.findById(clsId)
                resolve({ teacherDtls, classDtls })
            }
            catch (error) {
                reject(error)
            }
        })

    },
    editClass: (id, clsData) => {
        return new Promise(async (resolve, reject) => {
            try {
                const teacher = await Teacher.findById(clsData.classTeacherId);

                if (!teacher) {
                    return reject({ message: "Teacher Not Exist" });
                }

                const classTeacherName = teacher.name;
                const { department, regulation, startYear, endYear, semester, classTeacherId } = clsData;

                const updatedClass = await Classes.findByIdAndUpdate(id,
                    { department, regulation, startYear, endYear, semester, classTeacherName, classTeacherId },
                    { new: true }
                )
                console.log(updatedClass)
                resolve(updatedClass)
            } catch (err) {

            }

        })
    },
    ClssSemInc: (id) => {
        return new Promise(async (resolve, reject) => {
            console.log(id)
            const semInc = await Classes.findByIdAndUpdate(
                id,
                { $inc: { semester: 1 } },
                { new: true }
            )
            console.log(semInc.semester)
            resolve(semInc.semester)
        })
    },
    clssDlt: (id) => {
        {
            return new Promise(async (resolve, reject) => {
                console.log(id)
                const dlt = await Classes.deleteOne({_id:id})
                resolve(dlt)
            })
        }


    }
}
