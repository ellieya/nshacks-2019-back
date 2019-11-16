const router = require("express").Router();
const usersRoutes = require("./users");
const resourcesRoutes = require("./resources");


// User routes
router.use("/users", usersRoutes);

// Resources
router.use("/resources", resourcesRoutes);

module.exports = router;