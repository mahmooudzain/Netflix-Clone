import React, { useState } from "react";
import "./Movie.css";
import axios from "axios";

function Movie(props) {
  const trimmedOverview = props.movie.description.substring(0, 70);
  const deleteFav = () => {
    axios.delete(
      `http://192.168.1.35:3000/products/${props.movie._id}/favorite`
    );
  };

  const [inputVal, setInputVal] = useState("");
  const handleChange = (event) => {
    setInputVal(event.target.value);

    axios.patch(`http://192.168.1.35:3000/products/${props.movie._id}`, {
      comment: inputVal,
    });
  };
  return (
    <div>
      {props.isFavList ? (
        <div className="Card-Wraper">
          <div className="Fav-Card">
            <img
              className="Fav-Poster"
              src="https://i.ebayimg.com/images/g/za4AAOSwa-tlgkLa/s-l1200.webp"
              alt={props.movie.name}
            />
            <div className="Fav-Title">{props.movie.name}</div>
            <div className="fav-Overview">
              {props.movie.description.substring(0, 60)}
            </div>
            <button className="Update-Button" onClick={handleChange}>
              Update
            </button>
            <button className="Delete-Button" onClick={deleteFav}>
              Delete
            </button>
            <input value={inputVal} onChange={handleChange} />
          </div>
        </div>
      ) : (
        <card className="Mov-Wraper">
          <img
            className="Poster-Wraper"
            src="https://i.ebayimg.com/images/g/za4AAOSwa-tlgkLa/s-l1200.webp"
            alt={props.name}
          />
          <div className="Text-butt-Wraper">
            <div className="Title-Wraper">{props.movie.name}</div>

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
      )}
    </div>
  );
}

export default Movie;
