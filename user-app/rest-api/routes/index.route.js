const express = require('express');
const routerv1 = require("./v1/index.route");

const router = express.Router();

router.use('/v1', routerv1);

router.all("/*", (req, res) => {
    res.status(404).json({message: "Invalid route"});
})

module.exports = router;