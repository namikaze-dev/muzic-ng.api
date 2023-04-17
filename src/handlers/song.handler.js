const router = require("express").Router();
const { Song } = require("../models");
const { songService } = require("../services");

router.get("/songs", async (req, res) => {
    const songs = await songService.getSongs();
    res.send({ songs });
});

router.get("/songs/trends/sponsored", async (req, res) => {
    const songs = await songService.getSponsoredSongs();
    res.send({ songs });
});

router.get("/songs/trends/weekly", async (req, res) => {
    const songs = await songService.getTrendingSongs();
    res.send({ songs });
});

router.post("/songs", async (req, res) => {
    // const {  } = req.body;
    // const song = await songService.addSong(payload);
    // res.send({ song });
});

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Song
 *   description: Songs Management and retrieval
 */

/**
 * @swagger
 * /songs/trends/weekly:
 *   get:
 *     summary: Get weekly trending songs
 *     description: Returns a list of all weekly trending songs.
 *     tags: [Song]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 songs:
 *                   type: array
 *                   items: 
 *                     $ref: '#/components/schemas/Song'
 */