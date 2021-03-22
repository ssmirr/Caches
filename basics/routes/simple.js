const routes = require('express').Router();

routes.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});
  
routes.get('/', (req, res) => {
  res.send("Hello World");
});

module.exports = routes;