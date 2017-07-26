const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const fs = require('fs');

//setup body parser
app.use(bodyParser.urlencoded({ extended: false }));

//setup express validator
app.use(expressValidator());

app.use(express.static("public"));

//setup router and connect other JS filess
app.use(require("./todoRoutes"))


//register '.mustache'
app.engine("mustache", mustacheExpress());

//turn on default template engine
app.set("view engine", "mustache");

//stored views
app.set("views", __dirname + "/views");

app.listen(3010, () => {
  console.log("Successfuly running in http://localhost:3010");
})
