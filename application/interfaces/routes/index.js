var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const testingRouter = require('./testing');
const usersRouter = require('./users');

function routerApi(app){
  app.use('/api/v1',router);
  router.use('/test',testingRouter);
  router.use('/user',usersRouter);
}
module.exports = routerApi;