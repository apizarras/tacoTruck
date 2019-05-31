const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3030;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.search("view engine", "handlebars");

