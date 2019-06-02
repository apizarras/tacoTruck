const express = require("express");

const router = express.Router();

const taco = require("../models/taco.js");

router.get("/", function(req, res) {
    taco.all(function(data) {
        const hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



module.exports = router;