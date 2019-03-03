//Dependencies
//========================
var express = require("express");
var router = express.Router();
var Burger = require("../models/index");

//Main
//========================
router.get("/", function (req, res) {

  Burger.findAll({}).then(function (results) {

    res.render("index", {
      burgers: results
    });
  });

  //create a burger, push to mysql, redirect to / to show new burger
  router.post("/api/create", function (req, res) {

    Burger.create(
      {
        burger_name: req.body.burgerText,
        devoured: 0

      }).then(function () {
        res.redirect("/");
      })

  });

  //update the db to devoured true
  router.post("/api/update/:id", function (req, res) {
    Burger.update({
      devoured: 1
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (results) {
        res.end();
      })
    
  });


})
//export the routes / router
module.exports = router;