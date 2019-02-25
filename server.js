var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

var bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });