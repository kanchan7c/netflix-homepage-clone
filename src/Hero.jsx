import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./hero.css";

const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.originals);
      setMovie(request.data.results[Math.floor(Math.random() * 20)]);
      return request;
    }
    fetchData();
  }, []);

  const backgroundImagePath = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

  return (
    <header
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="hero_contents">
        <h1 lang="en-US" className="hero_title">
          {movie?.original_name || movie?.title || movie?.name}
        </h1>
        <div className="hero_buttons">
          <button className="hero_button">Play</button>
          <button className="hero_button">My List</button>
        </div>
        <h1 lang="en-US" className="hero_description">
          {movie?.overview}
        </h1>
      </div>
    </header>
  );
};

export default Hero;
