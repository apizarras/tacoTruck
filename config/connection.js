const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root2",
    password: "root",
    database: "tacosdb"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: "+err.stack);
        return;
    }
    console.log("connected as Id: "+connection.threadId);
});

module.exports = connection;