var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

/* GET users listing. */
router.get('/new', articlesCtrl.new);
router.post('/', articlesCtrl.create);
router.get('/', articlesCtrl.index);
router.delete('/:id', articlesCtrl.delete);
router.get('/:id/edit', articlesCtrl.edit);
router.put("/:id", articlesCtrl.update)
router.get('/:id', articlesCtrl.show);
//get /articles/:id/edit


module.exports = router;
