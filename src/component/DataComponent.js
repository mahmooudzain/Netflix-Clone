import React, { useState, useEffect } from "react";
function DataComponents() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US"
    )
      .then((Res) => Res.json())
      .then((data) => setdata(data));
  }, []);
  return <div>{data.results}</div>;
}

export default DataComponents;

// console.log(data);
// const DataComponent = ({ data }) => {
//   return <div>home</div>;
// };

// export default DataComponent;

// function MovieSearchResults() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch movie data');
//         }
//         const data = await response.json();
//         setMovies(data.results);
//
