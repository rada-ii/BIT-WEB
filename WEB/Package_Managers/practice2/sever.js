const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

const createAscii = require('./ascii');

app.get('/', (req, res) => {
  createAscii('Frontend bootcamp!', (err, data) => {
    if (err) {
      res.status(500).send('Error creating ASCII text');
    } else {
      res.send(data);
    }
  });
});
