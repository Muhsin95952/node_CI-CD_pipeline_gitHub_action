const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello I am Muhsin Shah. I hope you will be fine and this  is Node.js CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
