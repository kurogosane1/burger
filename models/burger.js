//requiring the different creating for database query
var ORM = require("../config/orm.js");

//creating a one funtion that will call which function is needed to be used then exporting it.
var burger = function (func, res, para){
	switch (func){
		case "all":
			ORM.selectAll(res);
			break;
		case "insert":
			ORM.insertOne(res, para);
			break;
		case "update":
			ORM.updateOne(res, para);
			break;
	}
};

module.exports = burger;