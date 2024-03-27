import React, { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import axios from "axios";

function Home(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.35:3000/products").then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div>
      <MovieList movies={movies} toto={props.toto} momo={props.momo} />
    </div>
  );
}

export default Home;
