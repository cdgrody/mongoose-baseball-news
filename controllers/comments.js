const article = require("../models/article");

module.exports = {
  create,
};

function create(req,res) {
    article.findById(req.params.id, function(err, article){

        req.body.user = req.user._id;
        req.body.userAvatar = req.user.avatar;
        req.body.author = req.user.name;
      
        article.comments.splice(0, 0, req.body);
        article.save(function(err) {
            res.redirect(`/articles/${req.params.id}`)
        });
    })
}