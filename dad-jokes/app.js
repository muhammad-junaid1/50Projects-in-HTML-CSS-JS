const jokeText = document.querySelector("#joke-text");
const jokeBtn = document.querySelector("#get-joke");

// Display the joke
const showJoke = (joke) => {
  jokeText.innerHTML = `<q>${joke}</q>`;
};

// Fetch the joke
const getJoke = async () => {
  try {
    jokeText.innerText = "...";
    const request = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const result = await request.json();
    showJoke(result.joke);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => getJoke();

jokeBtn.addEventListener("click", () => {
  getJoke();
});
