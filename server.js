// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

var bodyParser = require('body-parser');
// create the express app
//invoke var express and store the resulting application in var app
var app = express();
// use it!
app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// we are going to have /routes/index.js handle all of our routing
var route = require('./routes/index.js')(app);


// tell the express app to listen on port 3000
app.listen(3000, function() {
 console.log("listening on port 3000");
})
