const Article = require("../models/article")

module.exports = {
    new: newArticle,
    create,
    index,
    show
}

function index(req,res) {
    Article.find({}, function(err, articles) {
        res.render("articles/index", {title: "All Articles", articles})
    })
}

function show(req, res) {
    console.log("Welcome to the show kid");
    console.log(req.params);
    Article.findById(req.params.id)
        .exec(function (err, article) {
            console.log(article);
            res.render("articles/show", {title: "Article Detail", article})
        });
}

function newArticle(req, res) {
    res.render("articles/new", {title: "Add Article"})
}

function create(req,res) {
    console.log("req.body below...");
    console.log(req.body);
    if(!req.body.articleDate) req.body.articleDate = new Date()
    const article = new Article(req.body);
    article.save(function (err) {
        if (err) res.redirect('/articles/new')
        console.log(article);
        res.redirect('/articles')
    })
}