var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 8080,
	user = {
		username: "asdf",
		password: "asdf",
		token: "qwertz"
	};

app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.static(__dirname + "/../app"));
	app.use(app.router);
});

app.get("/restricted", function(request, response){
	if(request.headers["authorization"] === user.token){
		response.send("secret data");
	}
	response.send(401);
});

app.post("/login", function(request, response){
	if(request.body.username === user.username && request.body.password === user.password){
		response.send({ username: user.username, token: user.token });
	}
	response.send(401);
});

app.get

app.listen(port);
console.log("Now serving at port: " + port);