const express = require('express');
const UserController = require("../../controllers/user.controller");

const router = express.Router();

const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/find/:query', userController.findUser);
router.post("/", userController.createUser);

router.put("/", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.all("/*", (req, res) => {
    res.status(404).json({message: "Invalid route"});
})

module.exports = router;