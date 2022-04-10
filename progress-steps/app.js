let step = 0;
const stepsBarHighlight = document.querySelector(".steps-bar_highlight");
const allSteps = document.querySelectorAll(".steps .step");

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
nextBtn.addEventListener("click", () => {
  if (step < allSteps.length - 1) {
    step++;
  }
  nextStepAnimation();
  handleDisabledBtns();
});
prevBtn.addEventListener("click", () => {
  if (step > 0) {
    step--;
  }
  prevStepAnimation();
  handleDisabledBtns();
});

function nextStepAnimation() {
  allSteps[step].classList.add("active");
  stepsBarHighlight.style.width = (step / (allSteps.length - 1)) * 100 + "%";
}

function prevStepAnimation() {
  allSteps[step + 1].classList.remove("active");
  stepsBarHighlight.style.width = (step / (allSteps.length - 1)) * 100 + "%";
}

function handleDisabledBtns() {
  if (step > 0 && step < allSteps.length - 1) {
    nextBtn.removeAttribute("disabled", "true");
    prevBtn.removeAttribute("disabled", "true");
  } else if (step === 0) {
    prevBtn.setAttribute("disabled", "true");
  } else if (step === allSteps.length - 1) {
    nextBtn.setAttribute("disabled", "true");
  }
}
