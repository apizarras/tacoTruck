const path = require("path");
const connection = require("../config/connection.js");

function questionMarks(num) {
  const arr = [];
  for(i=0;i<num;i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  const arr = [];
  for(key in ob) {
    let value = ob[key];
    if(Object.hasOwnProperty.call(ob, key)) {
      if(typeofvalue === "string" && value.indexOf(" ") >= 0) {
        value = "'" + valule + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}
const orm = {
  all: function(tableInput, returnFunction) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    console.log("this is query string: " + queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
        returnFunction(result);
    });
  },
  create: function(table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table;

    queryString =+ " (";
    queryString =+ cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += questionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  }

};

module.exports = orm;