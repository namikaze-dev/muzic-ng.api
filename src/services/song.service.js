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

    return {
        getSongs,
        getSponsoredSongs,
        getTrendingSongs,
        addSong,
    };
}

module.exports = SongService;
