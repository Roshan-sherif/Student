const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const cors =require('cors'); 
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();
require('dotenv').config();
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests only from localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies/credentials
};

// Apply CORS middleware


const app = express();
app.use(express.json()); 
app.use(cors(corsOptions));
app.use(cookieParser())
app.use('/api/admin',adminRoutes)

app.listen(5000, () => console.log('Server running on port 5000'));
