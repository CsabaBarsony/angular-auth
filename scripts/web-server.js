var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 8080;

app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.static(__dirname + "/../app"));
	app.use(app.router);
});

app.get("/restricted", function(req, res){
	res.send(401);
});

app.listen(port);
console.log("Now serving at port: " + port);