const speakButton = document.getElementById("speak-btn");
const textArea = document.getElementById("text-to-speech");

if ("speechSynthesis" in window) {
  const synth = window.speechSynthesis;

  speakButton.addEventListener("click", () => {
    const text = textArea.value.trim();
    if (text !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    } else {
      alert("Please enter some text to convert to speech.");
    }
  });
} else {
  alert("Sorry, your browser does not support speech synthesis.");
}
