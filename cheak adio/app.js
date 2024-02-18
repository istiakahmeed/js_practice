var audio = document.getElementById("myAudio");
var currentTimeDisplay = document.getElementById("currentTime");
function onPlay() {
  audio.play();
}

function onPause() {
  audio.pause();
}

function setVolume(volume) {
  audio.volume = volume;
}

function updateTimeDisplay() {
  var currentMinutes = Math.floor(audio.currentTime / 60);
  var currentSeconds = Math.floor(audio.currentTime % 60);
  var formattedTime =
    currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
  currentTimeDisplay.textContent = formattedTime;
}

audio.addEventListener("timeupdate", updateTimeDisplay);
function playAndPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
