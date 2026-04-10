const express = require('express');

// Middleware
const logger = require('./middleware/morgan');

const app = express();
const port = 3000;

// Use morgan logger middleware
app.use(logger);

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});