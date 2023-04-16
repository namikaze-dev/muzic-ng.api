const mongoose = require("mongoose");

const Song = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        artiste: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },
        audio_url: {
            type: String,
            required: true,
        },
        date_released: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Song", Song);
