var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/new', ensureLoggedIn, articlesCtrl.new);
router.post('/', ensureLoggedIn, articlesCtrl.create);
router.get('/', articlesCtrl.index);
router.delete('/:id', ensureLoggedIn, articlesCtrl.delete);
router.get('/:id/edit', ensureLoggedIn, articlesCtrl.edit);
router.put("/:id", ensureLoggedIn, articlesCtrl.update)
router.get('/:id', articlesCtrl.show);
//get /articles/:id/edit


module.exports = router;
