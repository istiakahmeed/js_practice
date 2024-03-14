document.addEventListener("DOMContentLoaded", function () {
  const speakButton = document.getElementById("speak-btn");
  const textInput = document.getElementById("text-to-speak");

  async function getDataAndSpeak() {
    let url = "https://jsonplaceholder.typicode.com/posts/1";

    try {
      let { data } = await axios.get(url);
      // Assuming you want to read the title of the post
      let textToRead = data.body; // or use data.body to read the body

      speakText(textToRead);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    }
  }

  speakButton.addEventListener("click", function () {
    speakText();
    getDataAndSpeak();
  });
});

function speakText(text) {
  if ("speechSynthesis" in window) {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "bn-BD"; // You can change the language
    speech.onstart = function () {
      console.log("Speech has started");
    };

    speech.onend = function () {
      console.log("Speech has ended");
    };

    window.speechSynthesis.speak(speech);
  } else {
    alert("Your browser does not support the Web Speech API");
  }
}

// speech.lang = "en-US"; // Language
// speech.voice = selectedVoice; // Voice, selected from `speechSynthesis.getVoices()`
// speech.volume = 1; // Volume, range [0, 1]
// speech.rate = 1; // Rate, range [0.1, 10]
// speech.pitch = 1; // Pitch, range [0, 2]
