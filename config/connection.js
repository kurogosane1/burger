var mysql = require("mysql");

var connectionInfo = {
  host: "localhost",
  user: "root",
  password: "place your own password",
  database: "put your database name here"
};

if (process.env.JAWSDB_URL)
{
  connectionInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectionInfo);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
