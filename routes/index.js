var express = require('express');
var router = express.Router();

//controllers is required
const homeController = require('../controllers/homeController')

/* GET home page. */

router.get('/', homeController )

module.exports = router;
