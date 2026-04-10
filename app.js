require('dotenv').config();
const express = require('express');
const path = require('path');

// Middleware
const logger = require('./middleware/morgan');
const sendMail = require('./middleware/mailer');

const app = express();
const port = process.env.PORT || 8080;

// Use morgan logger middleware
app.use(logger);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendMail({ name, email, message });
    res.redirect('/?sent=true');
  } catch (err) {
    console.error(err);
    res.redirect('/?sent=false');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;