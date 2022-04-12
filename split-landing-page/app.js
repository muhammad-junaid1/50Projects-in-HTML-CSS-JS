const sections = document.querySelectorAll(".left, .right");

sections.forEach((s) => {
  s.addEventListener("mouseover", () => {
    resetSections();
    s.style.flex = "3";
  });
});

function resetSections() {
  sections.forEach((s) => {
    s.style.flex = "1";
  });
}
