const jwt = require('jsonwebtoken');


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
                  console.log("adsf"+jwtSecret)
                  
                                  
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
