const apiKey = "5f9193b0e38e8ab3c653b97671fc317b";
const baseURL = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w342";

// Show Movies in <main>
const showMovies = (movies) => {
  const mainEl = document.querySelector("main");
  mainEl.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, original_title, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
              <img
              src="${imgPath}/${poster_path}"
              alt=""
          />
          <div class="movie-info">
              <h4>${original_title}</h4>
              <span class="${getClassByRate(
                vote_average
              )}">${vote_average}</span>
          </div>
          <div class="overview">
          <h4>Overview</h4>
                <p>${overview}</p>
          </div>
          `;
    mainEl.appendChild(movieEl);
  });
};

const getClassByRate = (rate) => {
  if (rate >= 8) {
    return "green";
  } else if (rate >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

// Get popular movies initially

const getPopularMovies = async () => {
  try {
    const request = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}`);
    const response = await request.json();
    showMovies(response.results);
  } catch (error) {
    console.log(error);
  }
};

getPopularMovies();

// Search movies
const searchForm = document.forms[0];
const searchInput = searchForm["search_query"];

const getMoviesByQuery = async (e) => {
  try {
    e.preventDefault();
    const searchQuery = searchInput.value;
    const request = await fetch(
      `${baseURL}/search/movie?query=${searchQuery}&api_key=${apiKey}`
    );
    const response = await request.json();
    showMovies(response.results);
  } catch (error) {
    console.log(error);
  }
};

searchForm.addEventListener("submit", getMoviesByQuery);
