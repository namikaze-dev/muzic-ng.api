const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDoc = require("./docs/swagger");
const { songHandler } = require("./handlers");

const app = express();

const specs = swaggerJsdoc(swaggerDoc);



app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.get(
	"/docs",
	swaggerUi.setup(specs, {
		explorer: true,
	})
);

app.use("/", songHandler);

module.exports = app;
