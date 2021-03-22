const express = require('express');
const app = express();

const simple = require('./routes/simple');
const api = require('./routes/api');

// WEB ROUTES ⛯
app.use('/', simple);
app.use('/', api);

// HTTP SERVER
let server = app.listen(3003, function () {

  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
})