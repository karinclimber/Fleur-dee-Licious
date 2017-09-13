var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");



// app.use(express.static(path.join(__dirname, '/public')));
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + '/public'));
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/food_controller.js');
app.use("/", router);

app.listen(process.env.PORT || port, function(){
    console.log("is it working yet?")
});