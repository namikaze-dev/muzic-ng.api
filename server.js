const mongoose = require("mongoose");
const app = require("./src/app");
const config = require("./src/config/config");
const logger = require("./src/config/logger");

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
	logger.info('Connected to MongoDB');
});

app.listen(config.port, () => {
	logger.info(`server listening on port ${config.port}`);
});

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  process.exit(1);
};

process.on('uncaughtException', unexpectedErrorHandler);