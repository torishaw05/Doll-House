const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/recipeDirectory");


// ************NEW SCHEMA ****************
const dollsSchema = new Schema({
