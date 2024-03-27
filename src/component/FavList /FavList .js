import "./FavList.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";

function FavList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.35:3000/favorites").then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div className="Fav-Wraper">
      {movies.map((movie) => {
        return (
          <div className="span-move">
            <Movie movie={movie} isFavList={true} />
            <span className="com-d">{movie.comment}</span>
          </div>
        );
      })}
    </div>
  );
}
export default FavList;
