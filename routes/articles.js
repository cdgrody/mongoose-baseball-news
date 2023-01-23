var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

/* GET users listing. */
router.get('/new', articlesCtrl.new)
router.post('/', articlesCtrl.create)
//POST /articles/create


module.exports = router;
