"strict";

const drum = document.querySelectorAll(".drum");
const volumeSlider = document.getElementById("myRange");
console.log(volumeSlider.value);
const playMusic = function (drumsBtn) {
  var sound = new Audio(`sound/${drumsBtn}.wav`);
  sound.volume = volumeSlider.value / 100;
  console.log(volumeSlider.value);
  sound.play();
};

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    const drumsBtn = drum[i].innerHTML;
    playMusic(drumsBtn);
  });
}
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "a":
      playMusic("a");
      break;
    case "s":
      playMusic("s");
      break;
    case "d":
      playMusic("d");
      break;
    case "w":
      playMusic("w");
      break;
    case "q":
      playMusic("q");
      break;
    case "e":
      playMusic("e");
      break;
    case "r":
      playMusic("r");
      break;
    default:
    // code block
  }
});
