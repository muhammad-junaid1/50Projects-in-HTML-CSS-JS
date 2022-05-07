// Analog clock

const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hourHand = document.querySelector(".hour-hand");
const timeElem = document.querySelector(".time");

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(hands, 1000);
function hands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const scaledSeconds = scale(seconds, 0, 60, 0, 360);
  const scaledMinutes = scale(minutes, 0, 60, 0, 360);
  const scaledHours = scale(hours, 0, 12, 0, 360);

  secondsHand.style.transform = `rotate(${scaledSeconds}deg) translate(-50%, -100%)`;
  minutesHand.style.transform = `rotate(${scaledMinutes}deg) translate(-50%, -100%)`;
  hourHand.style.transform = `rotate(${scaledHours}deg) translate(-50%, -100%)`;

  // Digital time
  timeElem.innerHTML = now.toLocaleTimeString();
}

const hourNumbers = document.querySelectorAll(".clock .number");
hourNumbers.forEach((num, i) => {
  num.style.transform = `translate(-50%, -100%) rotate(${i * 30}deg)`;
  num.querySelector("span").style.transform = `rotate(${i * -30}deg)`;
});
