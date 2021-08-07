const img = document.querySelectorAll(".img");
const img_comp = document.querySelector(".img-comp");
const UI_Points = document.getElementById("my-score");
const AI_Points = document.getElementById("computer-score");
const showStat = document.querySelector(".innerStatus");
const statHead = document.querySelector(".statusHead");
const btnReset = document.querySelector(".resetResult");
let userCount = 0;
let compCount = 0;
const ALLimg = [];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);

const rock = {
  winVS: "scissors",
  loseVS: "paper",
  draw: "rock",
};
const paper = {
  winVS: "rock",
  loseVS: "scissors",
  draw: "paper",
};
const scissors = {
  winVS: "paper",
  loseVS: "rock",
  draw: "scissors",
};

//Count the points
const game = function (userChoice, computerChoice) {
  if (userChoice.winVS === computerChoice) {
    userCount++;
    UI_Points.textContent = `${userCount}`;
    statHead.textContent = "WIN";
    showStat.classList.add("win");
    showStat.classList.remove("lose");
    showStat.classList.remove("draw");
  } else if (userChoice.draw === computerChoice) {
    statHead.textContent = "DRAW";
    showStat.classList.remove("win");
    showStat.classList.remove("lose");
    showStat.classList.add("draw");
  } else {
    compCount++;
    AI_Points.textContent = `${compCount}`;
    statHead.textContent = "LOSE";
    showStat.classList.remove("win");
    showStat.classList.add("lose");
    showStat.classList.remove("draw");
  }
};

//Change Computer image and Choice
const changeComputerChoice = function () {
  img_comp.setAttribute(
    "src",
    `${ALLimg[randomInt(1, 4) - 1].getAttribute("src")}`
  );
  img_comp.classList.remove("visabal");
};

//Event Listener
img.forEach((img) => {
  ALLimg.push(img);

  img.addEventListener("click", function (e) {
    img_comp.classList.add("visabal");
    e.target.classList.toggle("border");
    setTimeout(() => {
      e.target.classList.toggle("border");
      showStat.style.display = "inline";
      changeComputerChoice();
      let compChoice = img_comp
        .getAttribute("src")
        .slice(
          img_comp.getAttribute("src").indexOf("/") + 1,
          img_comp.getAttribute("src").indexOf(".")
        );
      game(eval(img.id), compChoice);
    }, 1000);
  });
});

btnReset.addEventListener("click", function () {
  userCount = 0;
  compCount = 0;
  showStat.style.display = "none";
  UI_Points.textContent = `${userCount}`;
  AI_Points.textContent = `${compCount}`;
});
