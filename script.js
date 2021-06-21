//Make sound of mouse click
const chords = document.querySelectorAll(".key");

function playChords(key) {
  const chordeAudio = document.getElementById(key.dataset.note);
  chordeAudio.currentTime = 0;
  chordeAudio.play();
  key.classList.add("active");
  chordeAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

chords.forEach((chord) => {
  chord.onmousedown = () => {
    playChords(chord);
  };
});

// Make sound of keypress
const keysButton = ["z", "x", "c", "v", "b", "n"];

document.addEventListener("keydown", (evt) => {
  if (evt.repeat) {
    return;
  }
  const key = evt.key;
  const keyIndex = keysButton.indexOf(key);
  if (keyIndex > -1) {
    playChords(chords[keyIndex]);
  }
});
