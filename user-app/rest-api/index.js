const express = require("express");
const connect = require("./config/mongoose");
const router = require("./routes/index.route");
const cors = require('cors')

const PORT = 3000;

const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
    console.log("App is running on port", PORT);
})