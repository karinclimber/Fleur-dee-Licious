var mysql = require("mysql");
var express = require('express');
var connection;

// if (process.env.JAWSDB_URL) {
//     var connection = mysql.createConnection(process.env.JAWSDB_URL);
//   } else {

connection = mysql.createConnection({
  port: 3306,
  host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "dfdf0a6rezbtoatg",
  password: "cavednpaswkym14c",
  database: "zo0t9ienlwsd9olu"
});

console.log({
  host            : process.env.MYSQL_HOST,
  user            : process.env.MYSQL_USER,
  password        : process.env.MYSQL_SECRET,
  database        : process.env.MYSQL_DB
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
  
module.exports = connection;