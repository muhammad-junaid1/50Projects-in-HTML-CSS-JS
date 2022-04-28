const glasses = document.querySelectorAll(".glass");
const remainedWaterElem = document.querySelector(".empty-area");
const filledWaterElem = document.querySelector(".filled-area");
const totalWater = 2000; // Millilitres
let drunkWater = 0; // Mililitres

glasses.forEach((glass) => {
  let glassClicked = false;
  glass.addEventListener("click", () => {
    if (!glassClicked) {
      glassClicked = true;
      glass.classList.add("drunk");
      drunkWater += 250;
      updateWater(drunkWater);
    } else {
      glassClicked = false;
      glass.classList.remove("drunk");
      drunkWater -= 250;
      updateWater(drunkWater);
    }
  });
});

function updateWater(drunkWater) {
  // Filled area content
  const filledPercent = ((drunkWater / totalWater) * 100).toFixed(1);
  filledWaterElem.style.flex = `${filledPercent}%`;
  const filledPercentParts = filledPercent.split(".");
  filledWaterElem.innerHTML = `<p>${
    filledPercentParts[1] === "0" ? filledPercentParts[0] : filledPercent
  }%</p>`;              
  if (drunkWater === 0) {
    filledWaterElem.innerHTML = "";
  }

  // Empty area content
  const remainedLitres = ((totalWater - drunkWater) / 1000).toFixed(2);
  remainedWaterElem.style.flex = `${100 - filledPercent}%`;
  const remainedLitresParts = remainedLitres.split(".");
  remainedWaterElem.innerHTML = `<p><span>${
    remainedLitresParts[1] === "00"
      ? remainedLitresParts[0]
      : remainedLitres
  }L</span> </br> Remained</p>`;
  if (drunkWater === totalWater) {
    remainedWaterElem.innerHTML = "";

    setTimeout(() => {
      // Completed animation
      filledWaterElem.querySelector("p").classList.add("popout");
    }, 500);
  }
}
