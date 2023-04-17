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
        const song = await Song.findOne({ _id: id });
        song.plays += 1
        await song.save();
        return song;
    }

    async function incrementDownloads(id) {
        const song = await Song.findOne({ _id: id });
        song.downloads += 1
        await song.save();
        return song;
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
