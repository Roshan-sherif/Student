const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 

app.use('/admin',adminRoutes)

app.listen(5000, () => console.log('Server running on port 5000'));
