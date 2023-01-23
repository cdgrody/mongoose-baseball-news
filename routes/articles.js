var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

/* GET users listing. */
//GET /articles/new
router.get('/new', articlesCtrl.new)

module.exports = router;
