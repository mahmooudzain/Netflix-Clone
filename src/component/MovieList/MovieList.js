import React from "react";

import "./MovieList.css";
import Movie from "../Movie/Movie";
function MovieList(props) {
  return (
    <div className="All-Wraper">
      {props.movies.map((movie) => {
        return <Movie movie={movie} lolo={props.toto} nono={props.momo} />;
      })}
    </div>
  );
}

export default MovieList;
