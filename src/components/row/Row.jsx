import axios from "axios";
import moviesTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import { image_base_url, movie_base_url } from "../../apis/baseURL";
import errorPage from "../../assets/404_page_cover.jpg";
import "./row.css";

function Row({ title, request, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  function handleClick(e) {
    if (e.target.tagName === "IMG") {
      moviesTrailer(e.target.alt)
        .then((e) => {
          if (e) {
            const url = e.substring(e.indexOf("=") + 1);
            if (url === trailerUrl) {
              setTrailerUrl("");
              return;
            }
            setTrailerUrl(url);
          } else {
            setTrailerUrl(null);
            if (trailerUrl === null) {
              setTrailerUrl("");
            }
          }
        })
        .catch((e) => console.log(e));
    }
  }

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(`${movie_base_url}${request}`);
        const movies = response.data.results;
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [request]);

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="movies__container" onClick={handleClick}>
        {movies.map((curr) => {
          if (curr.poster_path || curr.backdrop_path) {
            return (
              <img
                src={
                  isLarge
                    ? `${image_base_url}${curr.poster_path}`
                    : `${image_base_url}${curr.backdrop_path}`
                }
                alt={curr.name || curr.title}
                key={curr.id}
                className={isLarge && "poster-large"}
              />
            );
          }
        })}
      </div>
      {trailerUrl && (
        <div className="trailer">
          <iframe
            width="100%"
            height="415"
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {trailerUrl === null && (
        <div className="trailer">
          <img src={errorPage} alt="not found" width="50%" />
        </div>
      )}
    </section>
  );
}

export default Row;
