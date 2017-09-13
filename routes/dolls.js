
const express     = require("express");
const Dolls        = require("../models/dolls");
const router      = express.Router();
let results= [];

// router.get("/", function(req, res)

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
  Dolls.create ({
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
// });
// router.post('/trash/:id', function(req, res) {
// let id = req.params.id;
//
//   Dolls.DeleteOne({_id: id})
//   .then(function (data) {
//     res.redirect('/')
//   })
//   .catch(function(err) {
//     res.send(err);
//   })
});router.get('/edit/:id' ,function (req, res) {

  Dolls.find({_id: req.params.id})
  .then(function(doll) {
  res.render('edit', {doll: dolls});
})
  .catch(function(err) {
    res.send(err);
  });
// });
//
//
// router.post('/edit/:id', function(req, res)
// let DesignDoll = req.params.id
//
//   Dolls.update({id: DesignDoll}, {
//        inches: req.body.inches,
//         material: req.body.material,
//         color: req.body.color,
//         brand: req.body.brand,
//         history: req.body.history,
//       })
//
 // );
router.get("/trash/:id", function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(data) {
      res.redirect("/");
    });
});

// router.post("/edit/:id", function(req, res) {
//   models.User.update({
//     inches: req.body.inches,
//     material: req.body.material,
//     color: req.body.color,
//     brand: req.body.brand,
//     history: req.body.history,
//   }, {
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function(data) {
//       res.redirect("/");
//     });
// });

router.post("/", function(req, res) {
  models.User.create({
    inches: req.body.inches,
    material: req.body.material,
    color: req.body.color,
    brand: req.body.brand,
    history: req.body.history,
  })
  .then(function(data) {
    res.redirect("/");
  });

});
});

module.exports = router;
