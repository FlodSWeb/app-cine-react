import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [sort, setSort] = useState(null);
  const searches = [
    "super",
    "power",
    "Earth",
    "green",
    "real",
    "dream",
    "love",
    "attack",
    "hollywood",
    "art",
    "jump",
    "pie",
    "nation",
    "french",
    "animal",
  ];
  const [search, setSearch] = useState(
    searches[parseInt(Math.random() * searches.length)]
  );

  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/movie/550?api_key=aa3b1d70aa9fa9e74324b06e39c8f171&query=?code&language=fr-FR`
        `https://api.themoviedb.org/3/search/movie?api_key=aa3b1d70aa9fa9e74324b06e39c8f171&query=${search}&language=us-US`
      )
      .then((res) => res.data.results)
      .then((res) => setMoviesData(res));
  }, [search]);

  return (
    <div>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Movie title..."
              id="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <input type="submit" value="Search" /> */}
          </form>
          <div className="btn-sort-container">
            <div
              className="btn-sort"
              id="toWorst"
              onClick={() => setSort("toWorst")}
            >
              Top
              <span>&#8593;</span>
            </div>
            <div
              className="btn-sort"
              id="toBest"
              onClick={() => setSort("toBest")}
            >
              <span>&#8595;</span>
              Flops
            </div>
            <div
              className="btn-sort"
              id="reset"
              onClick={() =>
                setSearch(searches[Math.floor(Math.random() * searches.length)])
              }
            >
              Random
            </div>
          </div>
          <div className="result">
            {moviesData &&
              moviesData
                .slice(0, 12)
                .sort((a, b) => {
                  if (sort === "toWorst") {
                    return b.vote_average - a.vote_average;
                  } else if (sort === "toBest")
                    return a.vote_average - b.vote_average;
                })
                .map((movie) => <Card movie={movie} key={movie.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
