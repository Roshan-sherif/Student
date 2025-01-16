const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const cors =require('cors'); 
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json()); 
app.use(cookieParser())
app.use('/admin',adminRoutes)

app.listen(5000, () => console.log('Server running on port 5000'));
