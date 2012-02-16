
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Aaron's Express application" })
  console.log(req.query)
};

exports.money = function(req, res){
  res.render('index', { title: "Money Page(index)" })
  console.log(req.query)
};