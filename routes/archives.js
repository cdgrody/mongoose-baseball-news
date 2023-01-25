var express = require('express');
var router = express.Router();
const archivesCtrl = require('../controllers/archives')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', archivesCtrl.index);
//GET /archives


module.exports = router;
