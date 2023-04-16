const SongService = require("./song.service");
const { Song } = require("../models");

const songService = new SongService(Song);

module.exports = {
  songService
};
