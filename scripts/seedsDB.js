const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the user below

// Connect to mongo
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true }) 
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.log(err));


const userSeed = {
    name: "Jorge Quiroz",
    age: 21
}

const resourceSeed = {
    shelter: {
        type: "shelter",
        name: "Breaking Ground",
        addressNumber: 505,
        streetName: "Eight Avenue, 5th Floor",
        phoneNumber: 2123899300
    },
    food: {
        type: "food kitchen",
        name: "Holy Apostles Soup Kitchen",
        addressNumber: 296,
        streetName: "Ninth Ave",
        phoneNumber: 2129240167
    },
    drugs: {
        type: "rehab",
        name: "St. Patrick's Cathedral",
        addressNumber: 460,
        streetName: "Madison Ave",
        phoneNumber: 212753261
    }
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

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });