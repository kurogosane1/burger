var connection = require("./connection.js");

var orm = {
    selectAll: function(res)//for the user to show the burgers//
    {
        connection.query("SELECT * FROM burgers", function(err, res){
            // to see if we will get an error
            if (err){
                throw err
            }
            // if there is no error then send it to the front page
            res.render("index", { burgersList: data });
        })
    },
    insertOne : function (res, burgerName)//When the user would like to have something to eat//
    {
        connection.query("INSERT INTO burger",{burger_name: data}, function(err, res){
            if (err){
                throw err
            }
            res.render('index', {burgerList: data});
        });
    },
    updateOne: function(res, burgerId)//when the user has devoured his burger//
    {
        connection.query("UPDATE burgers SET devoured=? WHERE ID=?", [true,  burgerID], function(err, res){
            if (err){
                throw err
            }
            res.redirect('/');
        })
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
  