const apiKey = "9fa6930b930e84f99ee4b7654fb3e0f9";
// const apiUrl = "https://api.themoviedb.org/3/movie/11?";
const apiUrl = "https://api.themoviedb.org/3/movie/550?";

async function searchMovie() {
  const response = await fetch(apiUrl + `api_key=${apiKey}`);
  var data = await response.json();

  let releaseDate = data.release_date;
  let runtime = data.runtime;
  let title = data.title;
  let overview = data.overview;
  let poster = data.poster_path;
  // console.log(`${data.title} "\n "  ${data.release_date}  "\n"  ${data.runtime}  "\n "  ${data.overview}`);
  poster.innerHTML;
  console.log(data);
}

searchMovie();