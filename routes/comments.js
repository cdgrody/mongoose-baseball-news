var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.post('/articles/:id/comments', ensureLoggedIn, commentsCtrl.create);

//POST /articles/:id/comments


module.exports = router;
