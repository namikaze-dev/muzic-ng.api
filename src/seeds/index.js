const mongoose = require("mongoose");
const config = require("../config/config");
const logger = require("../config/logger");
const seedSongs = require("./song.seed");

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info("Connected to MongoDB");
    seed();
});

const seed = async () => {
    try {
        await seedSongs();
        logger.info("seeding completed successfully");
    } catch (err) {
        logger.error(err);
    } finally {
        await mongoose.disconnect();
    }
};
