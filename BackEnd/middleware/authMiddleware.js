const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization'];
const jwtSecret= process.env.JWT_KEY
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, `${jwtSecret}`,);
    req.user = decoded;
    console.log(decoded)

    next(); 
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = protect;
