const UserModel = require("../models/user.model");
class UserService {
  saveDataInDB(id, name, Image) {
    const model = new UserModel({ name, id, Image });
    return model.save();
  }

  getUserById(id) {
    return UserModel.findOne({ id });
  }

  getAllUsers() {
    return UserModel.find({});
  }

  updateUser(id, name, Image) {
    const updatedUser = {};
    if (name) {
      updatedUser.name = name;
    }
    if (Image) {
      updatedUser.Image = Image;
    }
    return UserModel.updateOne({ id }, updatedUser);
  }

  searchUser(searchName){
    return UserModel.find({ 'name': { '$regex': searchName } }); 
  }
  
  deleteUser(id) {
    return UserModel.deleteOne({ id });
  }
}

module.exports = UserService;
