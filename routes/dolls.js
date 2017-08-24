
const express     = require("express");
const Dolls        = require("../collections/dolls");
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
router.get("/", findDolls, function(req, res) {
  res.render("dolledit", {dolls: results});
});
router.post("/", function(req, res) {
  Dolls.create({
    inches: req.body.inches,
    material: req.body.material,
    color: req.body.color,
    brand: req.body.brand,
    history: req.body.history,
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
