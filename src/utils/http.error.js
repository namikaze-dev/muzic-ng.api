class HTTPError extends Error {
    constructor(code, message, isFromClient = true, stack = "") {
        super(message);
        this.code = code;
        this.isFromClient = isFromClient;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = HTTPError;
