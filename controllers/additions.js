const Article = require("../models/article");
const Addition = require("../models/addition");

module.exports = {
  new: newAddition,
  create,
};

function newAddition(req, res) {
  Article.findById(req.params.id, function (err, article) {
    console.log(article);
    console.log("Article ID: ", article._id);
    res.render("additions/new", { title: "Story Addition", article });
  });
}

function create(req, res) {
  if (!req.body.additionDate) req.body.additionDate = new Date();

  req.body.user = req.user._id;
  req.body.author = req.user.name;
  req.body.userAvatar = req.user.avatar;

  const addition = new Addition(req.body);
  addition.save(function (err) {
    if (err) {
      console.log("error error error");
      console.log(err);
    }
    res.redirect(`/articles/${req.params.id}`);
  });
}
