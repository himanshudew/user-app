const UserService = require("../services/user.service");
class UserController {
  getUserById(req, res) {
    const userId = req.params.id;
    const userService = new UserService();
    userService
      .getUserById(userId)
      .then((data) => res.status(200).json({ data }))
      .catch((err) => res.status(500).json({ message: err.message }));
  }

  findUser(req, res) {
    const searchName = req.params.query;
    const userService = new UserService();
    userService
      .searchUser(searchName)
      .then((data) =>
        res.status(200).json({ message: "Users found Successfully", data })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  }

  deleteUser(req, res) {
    const userId = req.params.id;
    const userService = new UserService();
    userService
      .deleteUser(userId)
      .then((data) => res.status(200).json({ message: "User deleted Successfully", data }))
      .catch((err) => res.status(500).json({ message: err.message }));
  }

  getAllUsers(req, res) {
    const userService = new UserService();
    userService
      .getAllUsers()
      .then((data) => res.status(200).json({ data }))
      .catch((err) => res.status(500).json({ message: err.message }));
  }

  createUser(req, res) {
    const { id, name, Image } = req.body;
    const userService = new UserService();
    userService
      .saveDataInDB(id, name, Image)
      .then((data) =>
        res
          .status(201)
          .json({ message: `User with ${id} created successfully`, data })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  }

  updateUser(req, res) {
    const { id, name, Image } = req.body;
    const userService = new UserService();
    userService
      .updateUser(id, name, Image)
      .then((data) =>
        res.status(201).json({ message: "User Updated Successfully", data })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  }
}

module.exports = UserController;
