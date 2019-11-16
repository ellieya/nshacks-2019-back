const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the user below

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/googlebooks"
// );

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
    church: {
        type: "church",
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