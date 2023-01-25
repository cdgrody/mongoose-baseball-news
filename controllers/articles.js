const Article = require("../models/article");
const Addition = require("../models/addition");

module.exports = {
  new: newArticle,
  create,
  index,
  show,
  delete: deleteArticle,
  edit,
  update,
};

function index(req, res) {
  Article.find({}) 
    .sort({articleDate: -1})
    .exec(function (err, articles) {
    res.render("articles/index", { title: "Recent Articles", articles });
  });
}

function show(req, res) {
  Article.findById(req.params.id).exec(function (err, article) {
    Addition.find({article: article._id})
      .sort({additionDate: -1})
      .exec(function(err, addition) {
        console.log("see addition below")
        res.render("articles/show", { title: "Article Detail", article, addition });
      })
  });
}

function newArticle(req, res) {
  res.render("articles/new", { title: "Add Article" });
}

function create(req, res) {

  if (!req.body.articleDate) req.body.articleDate = new Date();

  req.body.user = req.user._id;
  req.body.author = req.user.name;
  req.body.userAvatar = req.user.avatar;

  const article = new Article(req.body);
  article.save(function (err) {
      if (err){
        console.log("error error error");
        console.log(err);
        res.redirect("/articles/new");
    } 
    res.redirect("/articles");
  });
}

function deleteArticle(req, res) {
  console.log("we're in the delete controller???????")
  console.log(req)
  Article.findById(req.params.id, function (err, article) {
  if(!article.user.equals(req.user._id)) res.redirect(`/articles/${req.params.id}`);
    if (err) {
      console.log("There's an error", err);
    } else {
      article.remove(req.params.id);
    }
    res.redirect("/articles");
  });
}

function edit(req, res) {
  Article.findById(req.params.id, function (err, article) {
  if(!article.user.equals(req.user._id)) res.redirect(`/articles/${req.params.id}`);
    if (err) {
      console.log("There's an error", err);
      res.redirect("/articles");
    } else {
      res.render("articles/edit", {
        title: "Edit Article",
        article,
      });
    }
  });
}

function update(req, res) {
  if (!req.body.articleDate) req.body.articleDate = new Date();
  Article.findByIdAndUpdate(req.params.id, req.body, function (err, article) {
        res.redirect(`/articles/${req.params.id}`);
  });
}
