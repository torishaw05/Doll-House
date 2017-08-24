const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/recipeDirectory");


// ************NEW SCHEMA ****************
const dollsSchema = new Schema({

    brand: { type: String, required: true, },
    color: {
      type: String,
      require: true
    },
    inches: {
      type: Number,
      // validate: [ function(val) {
      //   const lastTwoChars = val.substr(val.length - 3);
      //   return lastTwoChars === "in";
      // }, "Must be in inches."]
    },
    history: {
    type: String
    //   min: [1959, "Sorry, the year of   t   vhe doll must be at least 1959."],
    // max: [2018, "Sorry, the year of the doll must be before the year 2019."]
  },

  });

  // $(".trash").on("click", function(){
  //  $(this).closest("li").remove();
// })

  const Dolls = mongoose.model("Dolls", dollsSchema);

  module.exports = Dolls;
