const express = require("express");
const { songHandler } = require("./handlers");

const app = express();

app.use("/", songHandler);

module.exports = app;
