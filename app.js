const express = require("express");
const cors = require('cors')
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();
const mongoose = require ('mongoose')
const routes = require('./routes')
require('dotenv').config();

// Define middleware here
app.use(cors());
app.use(methodOverride('_method'));
app.use(express.json());

// Connect to Mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb installed succesfully');
});

// Use routes
app.use(routes);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

server.on('listening', () => {
  setInterval(() => {
      if(mongoose.connection.readyState === 1){}          
  }, 
  60000);
})
