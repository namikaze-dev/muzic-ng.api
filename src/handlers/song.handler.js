const router = require("express").Router();
const { Song } = require("../models");
const { songService } = require("../services");
const { HTTPERROR } = require("../utils/http.error");

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

router.post("/songs/increment-plays/:id", async (req, res, next) => {
    try {
        const song = await songService.incrementPlays(req.params.id);
        res.send({ song });
    } catch (err) {
        next(err);
    }
});

router.post("/songs/increment-downloads/:id", async (req, res, next) => {
    try {
        const song = await songService.incrementDownloads(req.params.id);
        res.send({ song });
    } catch (err) {
        next(err);
    }
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

/**
 * @swagger
 * /songs/increment-plays/{id}:
 *   post:
 *     summary: Increment the downloads count of song with {id}
 *     description: Increment the downloads count of song with {id}
 *     tags: [Song]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the song
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       "400":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: Invalid ObjectId
 *       "404":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: Song with id:643daa75d2488ea7095e5d1b does not exist
 */

/**
 * @swagger
 * /songs/increment-downloads/{id}:
 *   post:
 *     summary: Increment the downloads count of song with {id}
 *     description: Increment the downloads count of song with {id}
 *     tags: [Song]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the song
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       "400":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: Invalid ObjectId
 *       "404":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: Song with id:643daa75d2488ea7095e5d1b does not exist
 */
