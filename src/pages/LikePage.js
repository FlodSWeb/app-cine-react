import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let movieArray = [];

    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    console.log("moviesId ::", moviesId);

    for (let movieId of moviesId) {
      console.log("movieId :: ", movieId);
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=aa3b1d70aa9fa9e74324b06e39c8f171`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
    console.log("movieArray :: ", movieArray);
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Favorites <span>💛</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>No favorite in the list</h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;
