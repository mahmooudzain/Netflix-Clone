import React from "react";
import { useState, useEffect } from "react";
import "./Movie.css";

function Movie(props) {
  const trimmedOverview = props.movie.overview
    .split(" ")
    .slice(0, 20)
    .join(" ");

  return (
    <card className="Mov-Wraper">
      <img
        className="Poster-Wraper"
        src="https://i.ebayimg.com/images/g/za4AAOSwa-tlgkLa/s-l1200.webp"
        alt={props.title}
      />
      <div className="Text-butt-Wraper">
        <div className="Title-Wraper">{props.movie.title}</div>

        <button
          className={"Button-Wraper"}
          onClick={() => {
            props.nono(props.movie);
          }}
        >
          {"Add Favorite"}
        </button>
      </div>
      <div className="Text-Wraper">{trimmedOverview}</div>
    </card>
  );
}
export default Movie;
