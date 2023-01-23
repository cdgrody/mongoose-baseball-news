const Article = require("../models/article")

module.exports = {
    new: newArticle,
    create,
    index
}

function index(req,res) {
    Article.find({}, function(err, articles) {
        res.render("articles/index", {title: "All Articles", articles})
    })
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
        if (err) console.log("error error error")
        console.log("here comes the article")
        console.log(article);
        res.redirect('/articles')
    })
}