var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'burger_db',
    port     : '3306'
});

//Establish connection to mySQL DB
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('DB connected as id ' + connection.threadId);
});

module.exports = connection;
