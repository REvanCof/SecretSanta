var express = require('express');
var db = require("./models");

var PORT = process.env.PORT || 8080;
var app = express();

//LISTENER
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on port %s", PORT);
	});
})