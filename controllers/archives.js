const Article = require("../models/article");
const Addition = require("../models/addition");

module.exports = {
  index,
};

function index(req, res) {
  Article.find({}) 
    .sort({articleDate: -1})
    .exec(function (err, articles) {
    res.render("archives/index", { title: "Archived Articles", articles });
  });
}