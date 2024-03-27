import React, { useState } from "react";
import "./ModalMovie.css";
import axios from "axios";

function ModalMovie(props) {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  const clicked = () => {
    axios
      .post(`http://192.168.1.35:3000/products/${props.toto._id}/favorite`, {
        comment: inputVal,
      })
      .then(() => {
        props.momo(false);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => props.momo(false)}>
          x
        </span>
        <img
          className="Modal-Poster"
          src="https://i.ebayimg.com/images/g/za4AAOSwa-tlgkLa/s-l1200.webp"
          alt={props.name}
        ></img>
        <div className="Modal-Title">{props.toto.name}</div>
        <div className="Modal-Overview">{props.toto.description}</div>
        <input
          className="Input-Wraper"
          value={inputVal}
          onChange={handleChange}
        />

        <button onClick={clicked} className="Butt-Wraper">
          add
        </button>
      </div>
    </div>
  );
}

export default ModalMovie;
