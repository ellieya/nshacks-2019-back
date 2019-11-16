const router = require("express").Router();
const resourcesController = require("../../controllers/resourceController.js");

// Matches with "/api/resources"
router.route("/")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

// Matches with "/api/resources/list"
router.route("/list")
  .get(resourcesController.findAll)
  .put(resourcesController.update)
  .delete(resourcesController.remove);

module.exports = router;