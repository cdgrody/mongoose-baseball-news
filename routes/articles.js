var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

/* GET users listing. */
router.get('/new', articlesCtrl.new);
router.post('/', articlesCtrl.create);
router.get('/', articlesCtrl.index);
router.get('/:id', articlesCtrl.show)
//GET /articles/:id


module.exports = router;
