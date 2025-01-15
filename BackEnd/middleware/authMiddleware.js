// BackEnd/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded.adminId; // Attach the admin ID to the request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = protect;
