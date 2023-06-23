import axios from "axios";
import React, { useEffect, useState } from "react";
import { image_base_url, movie_base_url } from "../../apis/baseURL";
import request from "../../apis/requests";
import "./header.css";

const Header = () => {
  const [movie, setMovie] = useState({});

  async function fetch() {
    try {
      const response = await axios.get(
        `${movie_base_url}${request.fetchTrending}`
      );
      const array = response.data.results;
      const randomIndex = Math.floor(Math.random() * array.length);
      setMovie(array[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  let style = {};
  if (movie.backdrop_path) {
    style = {
      backgroundImage: `url(${image_base_url}${movie.backdrop_path})`,
    };
  }

  return (
    <header className="header" style={style}>
      <div className="header__content">
        <h1>{movie.title || movie.name}</h1>
        <div className="header__buttons">
          <button className="header__btn">Play</button>
          <button className="header__btn">My List</button>
        </div>
        <p>{movie.overview}...</p>
      </div>
      <div className="header__faded-bottom"></div>
    </header>
  );
};

export default Header;
