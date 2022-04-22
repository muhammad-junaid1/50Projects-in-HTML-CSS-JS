const textArea = document.querySelector("#choices-text");
const choicesList = document.querySelector(".choices-list");

textArea.focus();
textArea.addEventListener("keyup", (e) => {
  const choices = e.target.value.trim().split(",");
  renderTags(choices.filter((ch) => ch.trim() !== "").map((ch) => ch.trim()));
  if (e.code === "Enter") {
    e.preventDefault();
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

// Select random choice with animation
function selectRandom() {
  const times = 30;

  // Choices animation
  const interval = setInterval(() => {
    const randChoice = pickRandChoice();
    highlightChoice(randChoice);
    setTimeout(() => {
      unHighlightChoice(randChoice);
    }, 100);
  }, 200);

  // Highlight the rand choice after blinking animation
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      // Change bg of all choices other than random picked choice
      const choicesElems = document.querySelectorAll(".choices-list .choice");
      choicesElems.forEach((ch) => {
        ch.style.backgroundColor = "#ccc";
        ch.style.color = "black";
      });
      const randChoice = pickRandChoice();
      randChoice.style.color = "white";
      highlightChoice(randChoice);
    }, 100);
  }, times * 100);
}

// Highlight/Unhighlight choice
function highlightChoice(choice) {
  choice.style.backgroundColor = "rgb(255, 0 ,255)";
}
function unHighlightChoice(choice) {
  choice.style.backgroundColor = "";
}

function pickRandChoice() {
  const choicesElems = document.querySelectorAll(".choices-list .choice");
  const randChoice =
    choicesElems[Math.floor(Math.random() * choicesElems.length)];
  return randChoice;
}
