//!GLOBAL VARIABLES
const apiKey = "9fa6930b930e84f99ee4b7654fb3e0f9";
const apiUrl = "https://api.themoviedb.org/3/movie/";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function searchMovie(apID) {
  const response = await fetch(apiUrl + apID + "?" + `api_key=${apiKey}`);
  var data = await response.json();

  //!LOCAL VARIABLES
  let releaseDate = `Release Date: ${data.release_date}` ;
  let runtime = `Runtime: ${data.runtime}`;
  let title = `Title: ${data.title}`;
  let overview = data.overview;
  let posterPath = data.poster_path;
  let scrUrl = "https://image.tmdb.org/t/p/original";
  let poster = scrUrl + posterPath;

  if (response.status === 404 || response.status === 34) {
    alert("Error!!! Movie not found or Check Internet Network ");
  } 
  else {
    document.querySelector("#moviePoster").innerHTML = poster;
    document.querySelector("#movieTitle").innerHTML = title;
    document.querySelector("#movieReleaseDate").innerHTML = releaseDate;    
    document.querySelector("#movieRuntime").innerHTML = runtime;
    document.querySelector("#movieverview").innerHTML = overview;
  }

  console.log(data);
} 

searchButton.addEventListener("click", () => {
  searchMovie(searchInput.value);
});