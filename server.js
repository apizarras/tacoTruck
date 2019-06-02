
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection.js");
const taco = require("./models/taco.js");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("."));

const routes = require("./controllers/tacos_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("server listening on : "+PORT);
});