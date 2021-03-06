const mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root2",
    password: process.env.DB_PASS,
    database: "tacosdb"
});
};

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: "+err.stack);
        return;
    }
    console.log("connected as Id: "+connection.threadId);
});

module.exports = connection;