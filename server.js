const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3000;
console.log("Using PORT:", process.env.PORT);
app.listen(port, '0.0.0.0', () => {
  console.log(`Minimal server listening on port ${port}`);
});
