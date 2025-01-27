// Select necessary elements
const artistDivs = document.querySelectorAll(".cont2 .artist");
const musicDiv = document.getElementById("music");
const musicNameDiv = document.getElementById("music_name");
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.querySelector(".center_btn");
const backBtn = document.querySelector(".left_btn");
const nextBtn = document.querySelector(".right_btn");

// Initialize variables
let currentTrackIndex = null;
let isPlaying = false;
const tracks = [];

// Initially hide music name and image
musicDiv.style.backgroundImage = "none";
musicDiv.classList.remove("show"); // Ensure music div is not shown
musicNameDiv.classList.remove("show"); // Ensure music name is not shown

// Populate the tracks array with song data
artistDivs.forEach((artist, index) => {
    const musicName = artist.querySelector("h3").innerText;
    const musicImg = artist.style.backgroundImage;
    const audioSrc = artist.getAttribute("data-audio");

    if (audioSrc) {
        tracks.push({
            name: musicName,
            image: musicImg,
            audio: audioSrc
        });

        // Add event listener to play track on artist click
        artist.addEventListener("click", () => {
            currentTrackIndex = index; // Set the clicked artist's track as the current track
            loadTrack(currentTrackIndex);
            playTrack();
        });
    }
});

// Function to load a specific track
function loadTrack(index) {
    const track = tracks[index];
    if (track) {
        musicDiv.style.backgroundImage = track.image; // Show background image
        musicDiv.style.backgroundSize = "cover";
        musicDiv.style.backgroundPosition = "center";
        musicNameDiv.innerText = track.name; // Show track name
        audioPlayer.src = track.audio;

        // Show the music name and image
        musicDiv.classList.add("show");
        musicNameDiv.classList.add("show");
    }
}

// Function to play the current track
function playTrack() {
    if (currentTrackIndex !== null) {
        audioPlayer.play();
        isPlaying = true;
        playBtn.src = "Pause.png"; // Update play button to pause icon
    }
}

// Function to pause the current track
function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.src = "Play.png"; // Update play button to play icon
}

// Event listeners for play button
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

// Event listener for next button
nextBtn.addEventListener("click", () => {
    if (currentTrackIndex !== null) {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Loop back to the first track
        loadTrack(currentTrackIndex);
        playTrack();
    }
});

// Event listener for back button
backBtn.addEventListener("click", () => {
    if (currentTrackIndex !== null) {
        currentTrackIndex =
            (currentTrackIndex - 1 + tracks.length) % tracks.length; // Loop to the last track
        loadTrack(currentTrackIndex);
        playTrack();
    }
});

// Initial track load (ensure no track is loaded by default)
if (currentTrackIndex === null) {
    // Ensure music name and image are hidden when the page first loads
    musicDiv.classList.remove("show");
    musicNameDiv.classList.remove("show");
}
