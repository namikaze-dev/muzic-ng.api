const { format, createLogger, transports } = require("winston");
const config = require("./config");

const devLogFormat = format.printf(({ level, message }) => {
    return `[${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
    level: config.env === "development" ? "debug" : "info",
    format: config.env === "development" ? devLogFormat : format.json(),
    transports: [new transports.Console()],
});

module.exports = logger;
