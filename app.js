var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./models");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/action-log", (req, res) => {
  const target = req.query.target;
  return db.action
    .create({ target })
    .then(action => res.send(action))
    .catch(err => res.send(err));
});

module.exports = app;
