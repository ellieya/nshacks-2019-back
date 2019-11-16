const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 3 },
  age: { type: String, required: true },
  cellNumber: { type: String, required: true, minlength: 10, maxlength: 10 }
});

const User = mongoose.model("User", userSchema);

module.exports = User;