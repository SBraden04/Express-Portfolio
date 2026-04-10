const express = require('express');
const path = require('path');

// Middleware
const logger = require('./middleware/morgan');

const app = express();
const port = process.env.PORT || 8080;

// Use morgan logger middleware
app.use(logger);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;