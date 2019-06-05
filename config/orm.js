const connection = require("../config/connection.js");

function questionMarks(num) {
  const arr = [];
  for(i=0;i<num;i++) {
    arr.push("?");
  }
  console.log("questionmarks array: " + arr);
  return arr.toString();
}

function objToSql(ob) {
  const arr = [];
  for(key in ob) {
    let value = ob[key];
    if(Object.hasOwnProperty.call(ob, key)) {
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
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
    console.log("these are the vals: " +vals);

    let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + questionMarks(vals.length) +") ";

    console.log("this is 2nd queryString: " + queryString);
    connection.query(queryString, vals, function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);;
    })
  },

  delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table + " WHERE " + condition;
    console.log("this is delete query string: " + queryString)
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

module.exports = orm;