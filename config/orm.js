const path = require("path");
const connection = require("../config/connection.js");

const orm = {
  select: function(tableInput, returnFunction) {
    var queryString = "SELECT * FROM" + tableInput + ";";
    connection.query(queryString, function(err, restuls) {
      if (err) {
        throw err;
      console.log(result);
      }
        returnFunction(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

};

module.exports = orm;