const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");

function userInfo(userData){
    return {
        name: userData.name,
        age: userData.age,
        cellNumber: userData.cellNumber
    }
}

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;