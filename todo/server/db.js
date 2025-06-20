const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todos",
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = database;
