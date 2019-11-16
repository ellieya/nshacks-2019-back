const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the user below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const userSeed = {
    name: "Jorge Quiroz",
    age: 21
}

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });