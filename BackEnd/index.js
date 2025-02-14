const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes=require('./routes/teacherRoutes')
const cors =require('cors'); 
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true,
};



const app = express();
app.use(express.json()); 
app.use(cors(corsOptions));
app.use(cookieParser())
app.use('/api/admin',adminRoutes)
app.use('/api/teacher',teacherRoutes)

app.listen(5000, () => console.log('Server running on port 5000'));
