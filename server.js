var express = require('express');
var path = require('path');
var methodovr = require('method-override');
var bodyparser = require('body-parser');
var exprhbs = require('express-handlebars');
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

//Create express web server applicaiton
var app = express();
var PORT = process.env.PORT || 3000;

app.engine('hbs', exprhbs({extname: 'hbs', defaultLayout: 'main', layoutDir: __dirname + '/view/layouts/'}));
app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));

//Set static route for javascript file
app.use("/assets", express.static(path.join(__dirname, '/views/assets')));



app.get('/', function(req, res) {
  res.render('index', {title: "Eat Da Burger"});
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
