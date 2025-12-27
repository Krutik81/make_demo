// Load environment variables from the .env file
require('dotenv').config();

// Import express
const express = require('express');
const app = express();

// Define the GET route
app.get('/', (req, res) => {
  res.send('Hi, this is working!');
});

app.get('/demo', (req, res) => {
  res.send('Hi, this is working!');
});


app.get('/demo', (req, res) => {
  res.send('Hi, this is working!');
});

// Start the server using the port from the .env file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
