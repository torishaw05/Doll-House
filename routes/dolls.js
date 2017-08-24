const express     = require("express");
const Cars        = require("../collectios/dolls");
const router      = express.Router();
let results= [];

// router.get("/", function(req, res) {

function findDolls(req, res, next) {
  Dolls.find({})
    .then(function(data) {
      results = data;
      next()
    })
    .catch(function(err) {
      console.log(err);
    });
};
router.get("/", getDolls, function(req, res) {
  res.render("dolledit", {dolls: results});
});


router.post("/", function(req, res) {
  Dolls.create({
    size: req.body.size,
    color: req.body.color,
    year: req.body.brand,
    brand: [
      {brandName: req.body.brand},
      {history: req.body.history}
    ],
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
  res.redirect("/");
});
module.exports = router;
