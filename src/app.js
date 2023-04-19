const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDoc = require("./docs/swagger");
const config = require("./config/config");
const { songHandler } = require("./handlers");
const { errorConverter, errorHandler } = require("./middleware/error");

const app = express();

app.use(cors(config.cors));

const specs = swaggerJsdoc(swaggerDoc);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.get(
	"/docs",
	swaggerUi.setup(specs, {
		explorer: true,
	})
);

app.use("/", songHandler);

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
