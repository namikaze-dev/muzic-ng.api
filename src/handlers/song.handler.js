const router = require("express").Router();
const { Song } = require("../models");
const { songService } = require("../services");

router.get("/songs", async (req, res) => {
    const songs = await songService.getSongs();
    res.send({ songs });
});

router.post("/songs", async (req, res) => {
    // const {  } = req.body;
    // const song = await songService.addSong(payload);
    // res.send({ song });
});

module.exports = router;
