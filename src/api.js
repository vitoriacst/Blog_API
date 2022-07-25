const express = require('express');
const LoginController = require('./controller/Login.controller');
const CreateUserController = require('./controller/CreateUser.controller');
const categoriesController = require('./controller/Categories.controller');
const Validate = require('./middlewares/jwtValidateToken');
const Errors = require('./middlewares/Errors');
require('express-async-errors');
// ...

const app = express();

app.use(express.json());
app.post('/login', LoginController.userInformations);
app.post('/user', CreateUserController.CreateUser);
// adicionando a validacao
app.get('/user', Validate, CreateUserController.ListUsersInfos);
app.get('/user/:id', Validate, CreateUserController.ListUsersInfosById);
app.post('/categories', Validate, categoriesController.CategoryName);
app.use(Errors);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
