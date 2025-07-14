const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('I am  Muhsin Shah. And who are you!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
