// server.js
const express = require('express');
const path = require('path');
const tokenRoutes = require('./routes/token');

const app = express();

// serve file CSS dari folder public
app.use('/static', express.static(path.join(__dirname, 'public')));

// gunakan router token
app.use('/', tokenRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
