const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit
router.use(function(req, res) {
  res.status(404).send('Not found');
});

module.exports = router;