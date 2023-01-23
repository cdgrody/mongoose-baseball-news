const Article = require("../models/article")

module.exports = {
    new: newArticle
}

function newArticle(req, res) {
    res.render("articles/new", {title: "Add Article"})
}