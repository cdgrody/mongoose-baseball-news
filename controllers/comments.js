const article = require("../models/article");

module.exports = {
  create,
};

function create(req,res) {
    console.log("create function")
    article.findById(req.params.id, function(err, article){
        console.log(req.body)
        // console.log(article.comments)
        article.comments.push(req.body);
        // console.log(article.comments)
        article.save(function(err) {
            console.log(article.comments[0]);
            res.redirect(`/articles/${req.params.id}`)
        });
    })
}