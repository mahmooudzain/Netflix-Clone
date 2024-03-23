import React from "react";
import "./ModalMovie.css";

function ModalMovie(props) {
  console.log("llllll", props);
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => props.momo(false)}>
          x
        </span>
        <img
          className="Modal-Poster"
          src="https://i.ebayimg.com/images/g/za4AAOSwa-tlgkLa/s-l1200.webp"
          alt={props.title}
        ></img>
        <div className="Modal-Title">{props.toto.title}</div>
        <div className="Modal-Overview">{props.toto.overview}</div>
      </div>
    </div>
  );
}

export default ModalMovie;
