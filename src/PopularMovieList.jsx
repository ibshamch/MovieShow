import React from "react";

const PopularMovieList = ({ movieList }) => {
  return (
    <div className="movie-list">
      {movieList.map((movie) => {
        const {
          id,
          original_title,
          overview,
          popularity,
          release_date,
          title,
        } = movie;
        return (
          <div key={id} className="movie-card">
            <h2>{title}</h2>
            <p>{overview}</p>
            <p>{release_date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PopularMovieList;
