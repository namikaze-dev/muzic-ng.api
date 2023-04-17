const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./docs/swagger");
const { songHandler } = require("./handlers");

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/", songHandler);

module.exports = app;
