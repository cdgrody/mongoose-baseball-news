var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

/* GET users listing. */
router.get('/new', articlesCtrl.new);
router.post('/', articlesCtrl.create);
router.get('/', articlesCtrl.index);
//GET /articles/show


module.exports = router;
