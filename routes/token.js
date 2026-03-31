const express = require('express');
const path = require('path');
const { getToken } = require('./cache');

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/:service/:userId/:hashToken', (req, res) => {
  const { service, userId, hashToken } = req.params;
  const token = getToken(userId, service, hashToken);

  if (!token) {
    return res.status(404).send("Token tidak ditemukan atau sudah kadaluarsa");
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>Token ${service}</title>
      <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
      <div class="container">
        <h2>Token ${service.toUpperCase()} untuk User ${userId}</h2>
        <p id="token">${token}</p>
        <button onclick="navigator.clipboard.writeText('${token}')">Copy Token</button>
        <p class="note">Token ini akan kadaluarsa dalam 2 menit.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Web server running on port 3000');
});
