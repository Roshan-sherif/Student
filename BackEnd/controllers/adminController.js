const jwt = require('jwt-simple');

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
    
                console.log("addad"+token)
                
               res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'PRODUCTION',
                    sameSite: 'Strict',
                });
                return res.json({ token });
            } else {
                return res.status(401).json({ message: 'Login unsuccessful' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
};
