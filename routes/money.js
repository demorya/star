
/*
 * GET home page.
 */

exports.money = function(req, res){
  res.render('index', { title: "Money Page" })
  console.log(req.query)
};