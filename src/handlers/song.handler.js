const router = require("express").Router();
const { Song } = require("../models");
const { songService } = require("../services");

router.get("/songs", async (req, res) => {
    const songs = await songService.getSongs();
    res.send({ songs });
});

router.get("/songs/sponsored", async (req, res) => {
    const songs = await songService.getSponsoredSongs();
    res.send({ songs });
});

router.get("/songs/trending", async (req, res) => {
    const songs = await songService.getTrendingSongs();
    res.send({ songs });
});

router.post("/songs", async (req, res) => {
    // const {  } = req.body;
    // const song = await songService.addSong(payload);
    // res.send({ song });
});

module.exports = router;
