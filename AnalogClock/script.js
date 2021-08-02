const secondHand = document.querySelector("#sec");
const minHand = document.querySelector("#min");
const hourHand = document.querySelector("#hr");

const clockRotate = function () {
  const now = new Date();
  const hour = now.getHours() / 12;
  const min = now.getMinutes() / 60;
  const sec = now.getSeconds() / 60;
  secondHand.style.transform = `rotate(${sec * 360}deg)`;
  minHand.style.transform = `rotate(${min * 360}deg)`;
  hourHand.style.transform = `rotate(${hour * 360}deg)`;

  document.querySelector(".current-day").innerHTML = now.toDateString();
  document.querySelector(".current-seconds").innerHTML = now.getSeconds();
};
setInterval(clockRotate, 1000);
