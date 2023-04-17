const mongoose = require("mongoose");
const { Song } = require("../models");
const logger = require("../config/logger");

const songs = [
    {
        title: "Yoga",
        artiste: "Asake",
        image_url:
            "https://i0.wp.com/www.val9ja.com/wp-content/uploads/2023/01/7B903BF5-BDBD-4F81-A0AB-0D4EB8F25A9C.webp?fit=1024%2C1015&ssl=1",
        audio_url:
            "https://www.val9ja.com/wp-content/uploads/2023/01/Asake_-_Yoga.mp3",
        date_released: "30 January 2023",
    },
    {
        title: "peace sound my love",
        artiste: "HpBoy",
        image_url: "https://muzic.ng/Covers/IMG-20230226-WA0053.jpg",
        audio_url: "https://muzic.ng/Songs/Peace-Sound-hpboy-in-love.m4a",
        date_released: "28 February 2023",
    },
    {
        title: "Ojemba ft Olamide",
        artiste: "phyno ",
        image_url:
            "https://i0.wp.com/xclusiveloaded.com/wp-content/uploads/2023/01/Phyno-Ft.-Olamide-%E2%80%93-Ojemba.webp?fit=640%2C640&ssl=1",
        audio_url:
            "https://cdn.xclusiveloaded.com/wp-content/uploads/2023/01/Phyno_Ft_Olamide_-_Ojemba.mp3",
        date_released: "28 January 2023",
    },
    {
        title: "Pray for Nigeria",
        artiste: "S.A SOLUTION & his melodies",
        image_url: "https://muzic.ng/Covers/IMG-20230226-WA0027.jpg",
        audio_url: "https://muzic.ng/Songs/RRAY FOR NIGERIA mp3",
        date_released: "2 March 2023",
    },
    {
        title: "Bienvenue ft Ruger",
        artiste: "Dj Neptune",
        image_url:
            "https://i0.wp.com/xclusiveloaded.com/wp-content/uploads/2023/02/DJ-Neptune-%E2%80%93-Bienvenue-Ft.-Ruger.webp?fit=640%2C640&ssl=1",
        audio_url:
            "https://cdn.xclusiveloaded.com/wp-content/uploads/2023/02/DJ_Neptune_Ft_Ruger_-_Bienvenue.mp3",
        date_released: "1 February 2023",
    },
    {
        title: "Let there be light ft Seyi Vibes",
        artiste: "Zlatan",
        image_url:
            "https://www.naijaloaded.com.ng/wp-content/uploads/2023/02/Zlatan-Let-There-Be-Light.jpg",
        audio_url:
            "https://naijaloaded.store/wp-content/uploads/2023/02/Zlatan-Let-There-Be-Light-ft.-Seyi-Vibez.mp3",
        date_released: "2 February 2023",
    },
];

const seedSongs = async () => {
    const songSeeders = songs.map((song) => {
        const songSeeder = createSongSeeder(song);
        return songSeeder();
    });
    await Promise.all(songSeeders);
};

const createSongSeeder = (song) => {
    return async () => {
        const exists = await Song.findOne({
            title: song.title,
            artiste: song.artiste,
        });
        if (exists) {
            logger.info(`song "${song.title}" already exists, skipping...`);
            return;
        }
        await Song.create(song);
    };
};

module.exports = seedSongs;
