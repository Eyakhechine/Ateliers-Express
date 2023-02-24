const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var student = new Schema({
  Nom: String,
  Age: Number,
});
module.exports = mongoose.model("students", student);