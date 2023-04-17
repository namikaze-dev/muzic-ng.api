const mongoose = require("mongoose");
const httpStatus = require("http-status");
const HTTPError = require("../utils/http.error");

function SongService(Song) {
    async function getSongs() {
        return await Song.find({});
    }

    async function getSponsoredSongs() {
        return await Song.find({ category: ["sponsored"] });
    }

    async function getTrendingSongs() {
        return await Song.find({ category: ["trending"] });
    }

    async function addSong(payload) {
        const song = new Song(payload);
        return await Song.create(song);
    }

    async function incrementPlays(id) {
        try {
            const song = await Song.findOne({ _id: id });
            if (!song) {
                throw new HTTPError(
                    httpStatus.NOT_FOUND,
                    `Song with id:${id} does not exist`
                );
            }
            song.plays += 1;
            await song.save();
            return song;
        } catch (err) {
            if (err instanceof mongoose.Error) {
                throw new HTTPError(httpStatus.BAD_REQUEST, "Invalid ObjectId");
            }
            throw err;
        }
    }

    async function incrementDownloads(id) {
        try {
            const song = await Song.findOne({ _id: id });
            if (!song) {
                throw new HTTPError(
                    httpStatus.NOT_FOUND,
                    `Song with id:${id} does not exist`
                );
            }
            song.downloads += 1;
            await song.save();
            return song;
        } catch (err) {
            if (err instanceof mongoose.Error) {
                throw new HTTPError(httpStatus.BAD_REQUEST, "Invalid ObjectId");
            }
            throw err;
        }
    }

    return {
        getSongs,
        getSponsoredSongs,
        getTrendingSongs,
        addSong,
        incrementPlays,
        incrementDownloads,
    };
}

module.exports = SongService;
