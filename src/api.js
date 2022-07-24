const express = require('express');
const LoginController = require('./controller/Login.controller');
const Errors = require('./middlewares/Errors');
require('express-async-errors');
// ...

const app = express();

app.use(express.json());
app.post('/login', LoginController.userInformations);
app.use(Errors);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
