const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoose: {
        url: process.env.DSN,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME,
        },
    },
    cors: {
        origin: "*",
    },
};

module.exports = config;
