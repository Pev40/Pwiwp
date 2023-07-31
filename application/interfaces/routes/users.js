var express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");

/* GET users listing. */
router.get('/', UserController.GetAll);
router.get('/ruta-de-ustedes', UserController.GetAll);

module.exports = router;
