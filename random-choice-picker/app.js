const textArea = document.querySelector("#choices-text");
const choicesList = document.querySelector(".choices-list");

textArea.focus();
textArea.addEventListener("keyup", (e) => {
  const choices = e.target.value.trim().split(",");
  renderTags(choices.filter((ch) => ch.trim() !== "").map((ch) => ch.trim()));
  if (e.code === "Enter") {
    e.preventDefault();
    e.target.value = "";
    selectRandom();
  }
});

// Create tags out of input value and show them in HTML
let interval;
function renderTags(choices) {
  choicesList.innerHTML = "";
  choices.forEach((ch, i) => {
    choicesList.innerHTML += `<div class='choice'><p>${ch}</p></div>`;
  });
}

function resetChoicesBg() {
  allChoices.forEach((ch) => (ch.style.background = ""));
}

// Select random choice with animation
function selectRandom() {
  // Code here
  const choicesElems = document.querySelectorAll(".choices-list .choice");

  // Function for wave animation
  function setWaveAnim() {
    choicesElems.forEach((ch) => {
      ch.classList.remove("wave");
      ch.style.animationDelay = "";
    });
    setTimeout(() => {
      choicesElems.forEach((ch, i) => {
        ch.classList.add("wave");
        ch.style.animationDelay = `${i * 0.1}s`;
      });
    }, 100);
  }
  setWaveAnim();
  const interval = setInterval(setWaveAnim, 800);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      // Get random choice elem
      const randChoice =
        Array.from(choicesElems)[
          Math.floor(Math.random() * choicesElems.length)
        ];

      randChoice.style.backgroundColor = "rgb(255, 0 ,255)";
    }, 100);
  }, 3000);
}
