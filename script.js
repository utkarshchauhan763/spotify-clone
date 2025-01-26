
// document.addEventListener("DOMContentLoaded", () => {
//     // Get all the artist divs inside cont2
//     const artistDivs = document.querySelectorAll(".cont2 .artist");
//     const musicDiv = document.getElementById("music");
//     const musicNameDiv = document.getElementById("music_name");
//     const audioPlayer = document.getElementById("audio-player");
//     const leftButton = document.querySelector(".left_btn");
//     const playButton = document.querySelector(".center_btn");
//     const rightButton = document.querySelector(".right_btn");

//     let currentTrackIndex = -1;
//     let tracks = [];
//     let musicImages = [];  // To store the background images for each track

//     artistDivs.forEach((artist, index) => {
//         artist.addEventListener("click", () => {
//             const bgImage = artist.style.backgroundImage;
//             const musicName = artist.querySelector("h3").innerText;
//             const audioSrc = artist.getAttribute("data-audio");

//             if (bgImage) {
//                 musicDiv.style.backgroundImage = bgImage;
//                 musicDiv.style.backgroundSize = "cover";
//                 musicDiv.style.backgroundPosition = "center";
//                 musicNameDiv.textContent = musicName;
//                 musicNameDiv.style.color = "white";
//                 musicNameDiv.style.textAlign = "center";
//             }

//             // Update the tracks array and set the current track
//             if (tracks.indexOf(audioSrc) === -1) {
//                 tracks.push(audioSrc); // Push the audio track only if it's not already in the array
//                 musicImages.push(bgImage); // Add the corresponding background image for the track
//             }
//             currentTrackIndex = tracks.indexOf(audioSrc); // Set the current track index to the clicked artist's track

//             audioPlayer.src = tracks[currentTrackIndex];
//             audioPlayer.play();
//             playButton.src = "Pause.png"; // Change play button to pause icon when music is playing
//         });
//     });

//     // Play or pause the music
//     playButton.addEventListener("click", () => {
//         if (audioPlayer.paused) {
//             audioPlayer.play();
//             playButton.src = "Pause.png"; // Change the icon to Pause
//         } else {
//             audioPlayer.pause();
//             playButton.src = "Play.png"; // Change the icon to Play
//         }
//     });

//     // Next track functionality
//     rightButton.addEventListener("click", () => {
//         if (currentTrackIndex < tracks.length - 1) {
//             currentTrackIndex++;
//             audioPlayer.src = tracks[currentTrackIndex];
//             audioPlayer.play();
//             musicDiv.style.backgroundImage = musicImages[currentTrackIndex]; // Update the background image
//             musicNameDiv.textContent = artistDivs[currentTrackIndex].querySelector("h3").innerText; // Update music name
//             playButton.src = "Pause.png"; // Change play button to pause
//         }
//     });

//     // Previous track functionality
//     leftButton.addEventListener("click", () => {
//         if (currentTrackIndex > 0) {
//             currentTrackIndex--;
//             audioPlayer.src = tracks[currentTrackIndex];
//             audioPlayer.play();
//             musicDiv.style.backgroundImage = musicImages[currentTrackIndex]; // Update the background image
//             musicNameDiv.textContent = artistDivs[currentTrackIndex].querySelector("h3").innerText; // Update music name
//             playButton.src = "Pause.png"; // Change play button to pause
//         }
//     });
// });









document.addEventListener("DOMContentLoaded", () => {
    // Select all the necessary DOM elements
    const artistDivs = document.querySelectorAll(".cont2 .artist");
    const musicDiv = document.getElementById("music");
    const musicNameDiv = document.getElementById("music_name");
    const audioPlayer = document.getElementById("audio-player");
    const leftButton = document.querySelector(".left_btn");
    const playButton = document.querySelector(".center_btn");
    const rightButton = document.querySelector(".right_btn");

    let currentTrackIndex = -1;
    const tracks = [];       // Array to store audio track URLs
    const musicImages = [];  // Array to store background images for each track

    // Add click event listeners to artist divs
    artistDivs.forEach((artist) => {
        artist.addEventListener("click", () => {
            const bgImage = artist.style.backgroundImage; // Background image of the artist div
            const musicName = artist.querySelector("h3").innerText; // Music name
            const audioSrc = artist.getAttribute("data-audio"); // Audio source URL

            // Update the music display
            if (bgImage) {
                musicDiv.style.backgroundImage = bgImage;
                musicDiv.style.backgroundSize = "cover";
                musicDiv.style.backgroundPosition = "center";
                musicNameDiv.textContent = musicName;
                musicNameDiv.style.color = "white";
                musicNameDiv.style.textAlign = "center";
            }

            // Add track and image to arrays if not already present
            if (!tracks.includes(audioSrc)) {
                tracks.push(audioSrc);
                musicImages.push(bgImage);
            }

            // Set the current track index to the selected track
            currentTrackIndex = tracks.indexOf(audioSrc);

            // Play the selected track
            audioPlayer.src = tracks[currentTrackIndex];
            audioPlayer.play();
            playButton.src = "Pause.png"; // Update play button to pause icon
        });
    });

    // Play/Pause functionality
    playButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.src = "Pause.png"; // Update icon to Pause
        } else {
            audioPlayer.pause();
            playButton.src = "Play.png"; // Update icon to Play
        }
    });

    // Next track functionality
    rightButton.addEventListener("click", () => {
        if (currentTrackIndex < tracks.length - 1) {
            currentTrackIndex++;
            updateTrack();
        }
    });

    // Previous track functionality
    leftButton.addEventListener("click", () => {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            updateTrack();
        }
    });

    // Function to update the track and UI
    function updateTrack() {
        audioPlayer.src = tracks[currentTrackIndex];
        audioPlayer.play();
        musicDiv.style.backgroundImage = musicImages[currentTrackIndex];
        musicNameDiv.textContent = artistDivs[currentTrackIndex].querySelector("h3").innerText;
        playButton.src = "Pause.png"; // Update play button to pause
    }
});
