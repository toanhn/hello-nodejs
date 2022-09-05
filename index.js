const express = require('express');
const app = express();

app.get('/contact', (req, res) => {
  res.send('Hello word');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
  console.log('http://localhost:3000/');
});
