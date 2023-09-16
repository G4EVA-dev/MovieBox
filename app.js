//!GLOBAL VARIABLES
const apiKey = "9fa6930b930e84f99ee4b7654fb3e0f9";
const apiUrl = "https://api.themoviedb.org/3/movie/top_rated/?";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function searchMovie() {
  const response = await fetch(apiUrl + `api_key=${apiKey}`);
  var data = await response.json();

  //!LOCAL VARIABLES
  let releaseDate = `Release Date: ${data.results[0].release_date}` ;
  let runtime = `Runtime: ${data.results[0].runtime}`;
  let title = `Title: ${data.results[0].title}`;
  let overview = data.results[0].overview;
  let posterPath = data.results[0].poster_path;
  let scrUrl = "https://image.tmdb.org/t/p/original$";
  let poster = scrUrl + posterPath;

  let releaseDate1 = `Release Date: ${data.results[1].release_date}` ;
  let runtime1 = `Runtime: ${data.results[1].runtime}`;
  let title1 = `Title: ${data.results[1].title}`;
  let overview1 = data.results[1].overview;
  let posterPath1 = data.results[1].poster_path;

  let releaseDate2 = `Release Date: ${data.results[2].release_date}` ;
  let runtime2 = `Runtime: ${data.results[2].runtime}`;
  let title2 = `Title: ${data.results[2].title}`;
  let overview2 = data.results[2].overview;
  let posterPath2 = data.results[2].poster_path;

  let releaseDate3 = `Release Date: ${data.results[3].release_date}` ;
  let runtime3 = `Runtime: ${data.results[3].runtime}`;
  let title3 = `Title: ${data.results[3].title}`;
  let overview3 = data.results[3].overview;
  let posterPath3 = data.results[3].poster_path;

  let releaseDate4 = `Release Date: ${data.results[4].release_date}` ;
  let runtime4 = `Runtime: ${data.results[4].runtime}`;
  let title4 = `Title: ${data.results[4].title}`;
  let overview4 = data.results[4].overview;
  let posterPath4 = data.results[4].poster_path;

  let releaseDate5 = `Release Date: ${data.results[5].release_date}` ;
  let runtime5 = `Runtime: ${data.results[5].runtime}`;
  let title5 = `Title: ${data.results[5].title}`;
  let overview5 = data.results[5].overview;
  let posterPath5 = data.results[5].poster_path;

  let releaseDate6 = `Release Date: ${data.results[6].release_date}` ;
  let runtime6 = `Runtime: ${data.results[6].runtime}`;
  let title6 = `Title: ${data.results[6].title}`;
  let overview6 = data.results[6].overview;
  let posterPath6 = data.results[6].poster_path;

  let releaseDate7 = `Release Date: ${data.results[7].release_date}` ;
  let runtime7 = `Runtime: ${data.results[7].runtime}`;
  let title7 = `Title: ${data.results[7].title}`;
  let overview7 = data.results[7].overview;
  let posterPath7 = data.results[7].poster_path;

  let releaseDate9 = `Release Date: ${data.results[9].release_date}` ;
  let runtime9 = `Runtime: ${data.results[9].runtime}`;
  let title9 = `Title: ${data.results[9].title}`;
  let overview9 = data.results[9].overview;
  let posterPath9 = data.results[9].poster_path;

  let releaseDate10 = `Release Date: ${data.results[10].release_date}` ;
  let runtime10 = `Runtime: ${data.results[10].runtime}`;
  let title10 = `Title: ${data.results[10].title}`;
  let overview10 = data.results[10].overview;
  let posterPath10 = data.results[10].poster_path;

  if (response.status === 404 || response.status === 34) {
    alert("Error!!! Movie not found or Check Internet Network ");
  } 
  else {    
    document.querySelector("#movieTitle").innerHTML = title;
    document.querySelector("#movieReleaseDate").innerHTML = releaseDate;    
    document.querySelector("#movieRuntime").innerHTML = runtime;
    document.querySelector("#movieverview").innerHTML = overview;
    // document.querySelector("#moviePoster").appendChild(img);

    document.querySelector("#movieTitle1").innerHTML = title1;
    document.querySelector("#movieReleaseDate1").innerHTML = releaseDate1;    
    document.querySelector("#movieRuntime1").innerHTML = runtime1;
    document.querySelector("#movieverview1").innerHTML = overview1;

    document.querySelector("#movieTitle2").innerHTML = title2;
    document.querySelector("#movieReleaseDate2").innerHTML = releaseDate2;    
    document.querySelector("#movieRuntime2").innerHTML = runtime2;
    document.querySelector("#movieverview2").innerHTML = overview2;

    document.querySelector("#movieTitle3").innerHTML = title3;
    document.querySelector("#movieReleaseDate3").innerHTML = releaseDate3;    
    document.querySelector("#movieRuntime3").innerHTML = runtime3;
    document.querySelector("#movieverview3").innerHTML = overview3;

    document.querySelector("#movieTitle4").innerHTML = title4;
    document.querySelector("#movieReleaseDate4").innerHTML = releaseDate4;    
    document.querySelector("#movieRuntime4").innerHTML = runtime4;
    document.querySelector("#movieverview4").innerHTML = overview4;

    document.querySelector("#movieTitle5").innerHTML = title5;
    document.querySelector("#movieReleaseDate5").innerHTML = releaseDate5;    
    document.querySelector("#movieRuntime5").innerHTML = runtime5;
    document.querySelector("#movieverview5").innerHTML = overview5;

    document.querySelector("#movieTitle6").innerHTML = title6;
    document.querySelector("#movieReleaseDate6").innerHTML = releaseDate6;    
    document.querySelector("#movieRuntime6").innerHTML = runtime6;
    document.querySelector("#movieverview6").innerHTML = overview6;

    document.querySelector("#movieTitle7").innerHTML = title7;
    document.querySelector("#movieReleaseDate7").innerHTML = releaseDate7;    
    document.querySelector("#movieRuntime7").innerHTML = runtime7;
    document.querySelector("#movieverview7").innerHTML = overview7;

    document.querySelector("#movieTitle9").innerHTML = title9;
    document.querySelector("#movieReleaseDate9").innerHTML = releaseDate9;    
    document.querySelector("#movieRuntime9").innerHTML = runtime9;
    document.querySelector("#movieverview9").innerHTML = overview9;

    document.querySelector("#movieTitle10").innerHTML = title10;
    document.querySelector("#movieReleaseDate10").innerHTML = releaseDate10;    
    document.querySelector("#movieRuntime10").innerHTML = runtime10;
    document.querySelector("#movieverview10").innerHTML = overview10;
  }

  console.log(data);
} 
searchMovie();

// https://image.tmdb.org/t/p/original${movie.poster_path}

// searchButton.addEventListener("click", () => {
//   searchMovie(searchInput.value);
// });