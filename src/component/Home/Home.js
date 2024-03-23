import React, { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";

function Home(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <MovieList movies={movies} toto={props.toto} momo={props.momo} />
    </div>
  );
}

export default Home;
