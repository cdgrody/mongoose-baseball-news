const Article = require("../models/article")

module.exports = {
    new: newArticle,
    create
}

function newArticle(req, res) {
    res.render("articles/new", {title: "Add Article"})
}

function create(req,res) {
    console.log("req.body below...");
    console.log(req.body);
    const article = new Article(req.body);
    article.save(function (err) {
        console.log(article);
        // res.redirect('/articles/index')
        res.redirect('/')
    })
}