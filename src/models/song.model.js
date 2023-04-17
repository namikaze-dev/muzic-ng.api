const mongoose = require("mongoose");
const songCategories = require("../config/song.categories");

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
        category: [
            {
                type: String,
                enum: songCategories,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Song", Song);
