var express = require('express');
var router = express.Router();
const additionsCtrl = require('../controllers/additions')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
console.log("I'm here here here")
router.post('/articles/:id/additions', ensureLoggedIn, additionsCtrl.create);
router.get('/articles/:id/additions/new', ensureLoggedIn, additionsCtrl.new);


module.exports = router;
