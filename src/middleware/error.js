const mongoose = require("mongoose");
const httpStatus = require("http-status");
const config = require("../config/config");
const logger = require("../config/logger");
const HTTPError = require("../utils/http.error");

const errorConverter = (err, req, res, next) => {
    if (!(err instanceof HTTPError)) {
        const code =
            err.code || err instanceof mongoose.Error
                ? httpStatus.BAD_REQUEST
                : httpStatus.INTERNAL_SERVER_ERROR;
        const message = err.message || httpStatus[code];
        const isFromClient =
            code != httpStatus.INTERNAL_SERVER_ERROR ? true : false;
        err = new HTTPError(code, message, isFromClient, err.stack);
    }
    next(err);
};

const errorHandler = (err, req, res, next) => {
    let { code, message } = err;
    if (config.env === "production" && !err.isFromClient) {
        code = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }
    res.locals.errorMessage = err.message;
    logger.error(err.stack);
    res.status(code).send({ message });
};

module.exports = {
    errorConverter,
    errorHandler,
};
