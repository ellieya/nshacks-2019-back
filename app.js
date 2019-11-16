const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();
const mongoose = require ('mongoose')
const routes = require('./routes')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.status(404).send('Not found');
});

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://JQuiroz728:JQuiroz728@cluster0-2ufkm.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});