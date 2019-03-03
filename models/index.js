// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN,
  
},
{
  timestamps: false
});


Burger.sync();

module.exports = Burger;
