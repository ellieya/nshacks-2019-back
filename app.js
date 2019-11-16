const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const spawn = require("child_process").spawn;

// const process = spawn("python", ["s2t.py"])

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// // python script
// app.get('/', (req, res) => {

//   const { spawn } = require('child_process');
//   const pyProg = spawn('python', ['s2t.py']);

//   pyProg.stdout.on('data', function(data) {

//       console.log(data.toString());
//       res.write(data);
//       res.end('end');
//   });
// })


// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const resourcesRouter = require('./routes/api/resources');
const usersRouter = require('./routes/api/users');

app.use('/resources', resourcesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});