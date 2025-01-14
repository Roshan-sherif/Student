const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
