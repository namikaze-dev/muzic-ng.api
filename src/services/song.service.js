function SongService(Song) {
    async function getSongs() {
        return await Song.find({});
    }

    async function addSong(payload) {
        const song = new Song(payload);
        return await Song.create(song);
    }

    return {
        getSongs,
        addSong,
    };
}

module.exports = SongService;
