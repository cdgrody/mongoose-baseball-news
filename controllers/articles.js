const Article = require("../models/article")

module.exports = {
    new: newArticle,
    create,
    index,
    show,
    delete: deleteArticle
}

function index(req,res) {
    Article.find({}, function(err, articles) {
        res.render("articles/index", {title: "All Articles", articles})
    })
}

function show(req, res) {
    Article.findById(req.params.id)
        .exec(function (err, article) {
            res.render("articles/show", {title: "Article Detail", article})
        });
}

function newArticle(req, res) {
    res.render("articles/new", {title: "Add Article"})
}

function create(req,res) {
    if(!req.body.articleDate) req.body.articleDate = new Date()
    const article = new Article(req.body);
    article.save(function (err) {
        if (err) res.redirect('/articles/new')
        res.redirect('/articles')
    })
}

function deleteArticle(req,res) {
    console.log(req.params.id)
    Article.findById(req.params.id, function (err, article){
        if (err){
            console.log("There's an error", err)
        } else {
            console.log("Removing this article below");
            console.log(article);
            article.remove(req.params.id)
        }
        res.redirect('/articles');
    });
}