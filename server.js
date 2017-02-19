var express = require('express');
var exphbs =require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var path = require("path");




// var orm = require("./config/orm.js");



//creating a localhost with a port number
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burger_controller.js")(app);

console.log(req.url);

//listening for the localhost so it will run on localhost:8080.
app.listen(process.env.PORT || 8080);

