import React from "react";

const Card = ({ movie }) => {
  const dateFormatter = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreSetter = () => {
    let genreList = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 12:
          genreList.push(`Adventure`);
          break;
        case 28:
          genreList.push(`Action`);
          break;
        case 16:
          genreList.push(`Animation`);
          break;
        case 35:
          genreList.push(`Comedy`);
          break;
        case 80:
          genreList.push(`Crime`);
          break;
        case 99:
          genreList.push(`Documentary`);
          break;
        case 18:
          genreList.push(`Drama`);
          break;
        case 10751:
          genreList.push(`Family`);
          break;
        case 14:
          genreList.push(`Fantasy`);
          break;
        case 36:
          genreList.push(`History`);
          break;
        case 27:
          genreList.push(`Horror`);
          break;
        case 10402:
          genreList.push(`Music`);
          break;
        case 9648:
          genreList.push(`Mystery`);
          break;
        case 10749:
          genreList.push(`Romance`);
          break;
        case 878:
          genreList.push(`Science Fiction`);
          break;
        case 10770:
          genreList.push(`TV Movie`);
          break;
        case 53:
          genreList.push(`Thriller`);
          break;
        case 10752:
          genreList.push(`War`);
          break;
        case 37:
          genreList.push(`Western`);
          break;

        default:
          break;
      }
    }
    return genreList.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = (movie) => {
    let storedMovies = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    console.log("storedMovies entree :: ", storedMovies);

    if (storedMovies) {
      if (storedMovies.includes(movie)) {
        storedMovies = storedMovies.filter((stored) => stored !== movie);
        console.log("remove ", movie);
        window.location.reload();
      } else {
        storedMovies.push(movie);
        console.log("add ", movie);
      }
      window.localStorage.movies = [...storedMovies];
    } else {
      window.localStorage.movies = movie;
    }

    console.log("storedMovies sortie :: ", Object.values(storedMovies));
    console.log("window.localStorage.movies :: ", window.localStorage.movies);
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? <h5>{dateFormatter(movie.release_date)}</h5> : null}
      <h4>
        {movie.vote_average.toFixed(1)}/10 <span>🌟</span>
      </h4>
      <ul>
        {movie.genre_ids
          ? genreSetter()
          : movie.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
      </ul>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      {movie.genre_ids ? (
        <div
          className="btn"
          onClick={() => {
            addStorage(movie.id.toString());
          }}
        >
          Add to Favorites
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            addStorage(movie.id.toString());
          }}
        >
          Delete from Favorites
        </div>
      )}
    </div>
  );
};

export default Card;
