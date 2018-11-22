const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/action-log", (req, res) => {
  const target = req.body.target;
  return db.action
    .create({ target })
    .then(action => res.send(action))
    .catch(err => res.send(err));
});
app.get("/api/action-log", (req, res) => {
  db.action.findAll().then(records => res.send(records));
});

module.exports = app;
