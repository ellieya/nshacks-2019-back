const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 3 },
  age: { type: Number, required: true },
  cellNumber: { type: Number, required: true, minlength: 10, maxlength: 10 }
});

const User = mongoose.model("User", userSchema);

module.exports = User;