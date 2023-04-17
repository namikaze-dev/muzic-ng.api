function SongService(Song) {
    async function getSongs() {
        return await Song.find({});
    }

    async function getSponsoredSongs() {
        return await Song.find({ category: ["sponsored"] });
    }

    async function addSong(payload) {
        const song = new Song(payload);
        return await Song.create(song);
    }

    return {
        getSongs,
        getSponsoredSongs,
        addSong,
    };
}

module.exports = SongService;
