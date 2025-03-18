// Create a web server
// 1. Load express module
const express = require('express');
// 2. Create an express server
const server = express();
// 3. Create a route
server.get('/comments', (req, res) => {
  res.send('Comments Page');
});
// 4. Start the server
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});