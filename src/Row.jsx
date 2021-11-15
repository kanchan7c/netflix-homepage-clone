import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url_poster = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [getMovies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //pulling info when the row component loads
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* title of the row  */}
      <h1 className="row_title">{title}</h1>
      {/* rendering the poster banner dynamically  */}
      <div className="row_posters">
        {getMovies.length !== 0
          ? getMovies.map((movie) => {
              return (
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  src={`${base_url_poster}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name || movie.original_title}
                />
              );
            })
          : ""}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
