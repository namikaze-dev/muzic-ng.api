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
        category: ["trending"],
    },
    {
        title: "peace sound my love",
        artiste: "HpBoy",
        image_url: "https://muzic.ng/Covers/IMG-20230226-WA0053.jpg",
        audio_url: "https://muzic.ng/Songs/Peace-Sound-hpboy-in-love.m4a",
        date_released: "28 February 2023",
        category: ["trending"],
    },
    {
        title: "Ojemba ft Olamide",
        artiste: "phyno ",
        image_url:
            "https://i0.wp.com/xclusiveloaded.com/wp-content/uploads/2023/01/Phyno-Ft.-Olamide-%E2%80%93-Ojemba.webp?fit=640%2C640&ssl=1",
        audio_url:
            "https://cdn.xclusiveloaded.com/wp-content/uploads/2023/01/Phyno_Ft_Olamide_-_Ojemba.mp3",
        date_released: "28 January 2023",
        category: ["trending"],
    },
    {
        title: "Pray for Nigeria",
        artiste: "S.A SOLUTION & his melodies",
        image_url: "https://muzic.ng/Covers/IMG-20230226-WA0027.jpg",
        audio_url: "https://muzic.ng/Songs/RRAY FOR NIGERIA mp3",
        date_released: "2 March 2023",
        category: ["trending"],
    },
    {
        title: "Bienvenue ft Ruger",
        artiste: "Dj Neptune",
        image_url:
            "https://i0.wp.com/xclusiveloaded.com/wp-content/uploads/2023/02/DJ-Neptune-%E2%80%93-Bienvenue-Ft.-Ruger.webp?fit=640%2C640&ssl=1",
        audio_url:
            "https://cdn.xclusiveloaded.com/wp-content/uploads/2023/02/DJ_Neptune_Ft_Ruger_-_Bienvenue.mp3",
        date_released: "1 February 2023",
        category: ["trending"],
    },
    {
        title: "Let there be light ft Seyi Vibes",
        artiste: "Zlatan",
        image_url:
            "https://www.naijaloaded.com.ng/wp-content/uploads/2023/02/Zlatan-Let-There-Be-Light.jpg",
        audio_url:
            "https://naijaloaded.store/wp-content/uploads/2023/02/Zlatan-Let-There-Be-Light-ft.-Seyi-Vibez.mp3",
        date_released: "2 February 2023",
        category: ["trending"],
    },
    {
        title: "Style",
        artiste: "Harvest",
        image_url: "https://muzic.ng/Covers/IMG-20230409-WA0029.jpg",
        audio_url: "https://muzic.ng/Songs/Harvest-Style.mp3",
        date_released: "10 April 2023",
        category: ["sponsored"],
    },
    {
        title: "Hustle",
        artiste: "KenyWideBoy",
        image_url: "https://muzic.ng/Covers/IMG-20230409-WA0052.jpg",
        audio_url: "https://muzic.ng/Songs/KENYWIDEBOI-Hustle.m4a",
        date_released: "10 April 2023",
        category: ["sponsored"],
    },
    {
        title: "Badman",
        artiste: "Oranzickez",
        image_url: "https://muzic.ng/Covers/IMG-20230405-WA0016.jpg",
        audio_url: "https://muzic.ng/Songs/oranzickez-Badman.mp3",
        date_released: "5 April 2023",
        category: ["sponsored"],
    },
    {
        title: "Illuminati ft Danjuela",
        artiste: "Ad Sweetlife",
        image_url: "https://muzic.ng/Covers/IMG-20230327-WA0048.jpg",
        audio_url:
            "https://muzic.ng/SSongsAD Sweetlife x Danjuela_-_ILLUMINATY.mp3",
        date_released: "30 March 2023",
        category: ["sponsored"],
    },
    {
        title: "Title Anabi bawasa Dole muso Anabi",
        artiste: "Sultan Massaka",
        image_url: "https://muzic.ng/Covers/IMG-20230327-WA0038.jpg",
        audio_url:
            "https://muzic.ng/Songs/zakiru masssaka agaie_mixx.wav(0).mp3",
        date_released: "27 March 2023",
        category: ["sponsored"],
    },
    {
        title: "Better for You ",
        artiste: "Berny ",
        image_url: "https://muzic.ng/Covers/IMG-20230316-WA0045.jpg",
        audio_url: "https://muzic.ng/Songs/better-for-you-berny.mp3",
        date_released: "16 March 2023",
        category: ["sponsored"],
    },
    {
        title: "peace sound my love",
        artiste: "HpBoy",
        image_url: "https://muzic.ng/Covers/IMG-20230226-WA0053.jpg",
        audio_url: "https://muzic.ng/Songs/Peace-Sound-hpboy-in-love.m4a",
        date_released: "28 February 2023",
        category: ["sponsored"],
    },
    {
        title: "Pray for Nigeria",
        artiste: "S.A SOLUTION & his melodies",
        image_url: "https://muzic.ng/Covers/IMG-20230226-WA0027.jpg",
        audio_url: "https://muzic.ng/Songs/RRAY FOR NIGERIA mp3",
        date_released: "2 March 2023",
        category: ["sponsored"],
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
