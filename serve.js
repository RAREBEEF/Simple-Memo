// express & path import
const express = require("express");
const path = require("path");

const app = express();

// static 경로 지정
app.use(express.static(path.join(__dirname, "build")));

// static 외 경로 지정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
