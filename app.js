//!GLOBAL VARIABLES
const apiKey = "9fa6930b930e84f99ee4b7654fb3e0f9";
const apiUrl = "https://api.themoviedb.org/3/movie/";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function searchMovie(apID) {
  const response = await fetch(apiUrl + apID + "?" + `api_key=${apiKey}`);
  var data = await response.json();

  //!LOCAL VARIABLES
  let releaseDate = data.release_date;
  let runtime = data.runtime;
  let title = data.title;
  let overview = data.overview;
  let posterPath = data.poster_path;
  let scrUrl = "https://image.tmdb.org/t/p/original";
  let poster = scrUrl + posterPath;

  if (response.status === 404) {
    alert("Error");
  } else {
    document.querySelector("#movieTitle").innerHTML = data.title;
    document.querySelector("#movieDate").innerHTML = data.release_date;
    document.querySelector("#moviePoster").innerHTML = poster;
    document.querySelector("#runtime").innerHTML = runtime;
  }

  // console.log(data);
}
searchButton.addEventListener("click", () => {
  searchMovie(searchInput.value);
});
