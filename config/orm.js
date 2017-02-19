//requiring the connection to the database
var connection = require("./connection.js");

// creating different fuctions for each connection querys, inputing them into an object so it can be exported. The first function will also render to the handlebars. Rest will redirect to the app.get which goes back to the first function
var selectAll = function(res){
	connection.query("SELECT * FROM burgers", function(err, data) {
		if (err){
			throw err;
		}

		res.render("index", { burgerList: data });
	});
};

var insertOne = function(res, burgerName){
	connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
};

var updateOne = function(res, burgerID){
	connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, burgerID], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
};

var end = function(){
	connection.end();
};

var ORM = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne,
	end: end
};

module.exports = ORM;