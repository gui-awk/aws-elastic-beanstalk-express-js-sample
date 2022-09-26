const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Pipeline test 2 reproves'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
