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
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

// configure and hide private fields
Song.methods.toJSON = function () {
    var song = this.toObject();
    song.id = song._id;
    delete song._id;
    delete song.category;
    delete song.created_at;
    delete song.updated_at;
    delete song.__v;
    return song;
};

module.exports = mongoose.model("Song", Song);
