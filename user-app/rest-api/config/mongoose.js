//require mongoose module
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//require database URL from properties file with db name
const dbURL = "mongodb://sonutj:Sonu%401996@cluster0-shard-00-00.yadya.mongodb.net:27017,cluster0-shard-00-01.yadya.mongodb.net:27017,cluster0-shard-00-02.yadya.mongodb.net:27017/habitracker?ssl=true&replicaSet=atlas-5caj5y-shard-0&authSource=admin&retryWrites=true&w=majority";
//const dbURL = "mongodb://yandu:yandu123@cluster0-shard-00-00.gxkcj.mongodb.net:27017,cluster0-shard-00-01.gxkcj.mongodb.net:27017,cluster0-shard-00-02.gxkcj.mongodb.net:27017/usersdb?ssl=true&replicaSet=atlas-i3cjv1-shard-0&authSource=admin&retryWrites=true&w=majority";

//export this function and imported by server.js
function connectMongoose() {
  mongoose.connect(dbURL);//process.env.jo bhi key hai

  mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection is open to ", dbURL);
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection has occured " + err + " error");
  });

  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
}

module.exports = connectMongoose;
