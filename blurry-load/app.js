const loadingText = document.querySelector(".main h1");
const bg = document.querySelector(".bg");

let loading = 0;
let interval;
window.onload = () => {
  interval = setInterval(update, 30);
};

function update() {
  loading++;

  if (loading > 99) {
    clearInterval(interval);
  }
  loadingText.innerText = `${loading}%`;
  loadingText.style.opacity = scale(loading, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

// Mapping a range of numbers to another range of numbers
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
