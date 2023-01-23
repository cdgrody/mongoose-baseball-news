var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')

/* GET users listing. */
router.post('/articles/:id/comments', commentsCtrl.create);

//POST /articles/:id/comments


module.exports = router;
