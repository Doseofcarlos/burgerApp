var mysql = require("mysql");

if(process.env.JAWSDB_URL) {

} else {
  connection= mysql.createConnection({
    host: 'fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'soynzeld1oc4y865',
    password: 'p3v3gb3sf9c97xp1',
    database: 'lk6aatjdrxxq6m2v',
  });
}

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
