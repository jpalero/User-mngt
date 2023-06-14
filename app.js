const express = require("express");
const exphbs = require("express-handlebars"); // updated to 6.0.X
//const bodyParser = require('body-parser');  // Remove
//const mysql = require('mysql'); // Remove

require("dotenv").config();

const app = express();

// 'process.env' where you can call the key:pair value set by you.
const port = process.env.PORT || 3000;

// Parsing middleware
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json()); So the data will compile a json file
app.use(express.json()); // New

// Static Files
//this is to set your css, js & img. For easy access. The 'public is where the all resources place in
app.use(express.static("public"));

// create a variable handlebars to store yung file with extension of .hbs
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine); // then calling your engine.
app.set("view engine", ".hbs");

//render your routes to locate a path that you wanted to load when it first open
const routes = require("./server/routes/user");
app.use("/", routes);

//this will show your connected in server whe you see this promt message
app.listen(port, () => console.log(`Listening on port ${port}`));
