const jwt = require('jwt-simple');
const jwtdecode = require('jsonwebtoken');


const jwtSecret = process.env.JWT_SECRET || 'my$uperS3cretKeY2025!!$5d8f1d';

module.exports = {
    adminLogin: async (userData, res) => {
        try {
            const ADMIN_CREDENTIALS = {
                userId: process.env.ADMIN_USERID,
                password: process.env.ADMIN_PASSWORD,
            };
            if (ADMIN_CREDENTIALS.userId === userData.userId && ADMIN_CREDENTIALS.password === userData.password) {
                const token = jwt.encode({ username: ADMIN_CREDENTIALS.userId, role: 'admin' }, jwtSecret);
                
                return ({success: true, token ,redirect:'/admin'});
            } else {

                return ({ message: 'Login unsuccessful' });
            }
        } catch (error) {

            console.error(error);
            return({ message: 'Server error' });
        }
    }
};
