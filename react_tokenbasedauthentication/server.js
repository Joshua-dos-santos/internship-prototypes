const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const secretKey = '8sG9rF5jM2oA1pQ3wE4uY7iZ6xH0kL'; // Replace with your actual secret key

app.post('/login', (req, res) => {
    // For simplicity, assume req.body contains username and password
    const { userName, password } = req.body;

    // Perform your authentication logic here
    // For demonstration purposes, let's just check if username and password are provided
    if (!userName || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userName }, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

    res.json({ token });
});

app.listen(8080, () => console.log('API is running on localhost:8080/login'));
