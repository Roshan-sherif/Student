const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');


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
                  
                                  
                return ({success: true, token ,redirect:'/admin'});
            } else {

                return ({ message: 'Login unsuccessful' });
            }
        } catch (error) {

            console.error(error);
            return({ message: 'Server error' });
        }
    },
    addTeacher:(data)=>{
        return new Promise(async(resolve,reject)=>{
try{
    const {name,register,gender,department,subject} =data
    const newTeacher =new Teacher({
        name,
        register,
        gender,
        department,
        subject
    })
    const saveTeacherDB= await newTeacher.save()
    console.log(saveTeacherDB)
    resolve(saveTeacherDB)
    
}catch(error){
reject(error)
}
        })
    }
};
