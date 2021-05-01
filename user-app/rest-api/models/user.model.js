var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    Image: {
      type: String,
      unique: false,
      required: true,
    },
    name: {
      type: String,
      unique: false,
      required: true,
    },
    id: {
      type: Number,
      unique: true,
      required: true,
    },
  }
);

const userModel = mongoose.model("himanshuusers", userSchema);//collection name
module.exports = userModel;
