const SearchedMovies = ({ searchMovieList }) => {
  return (
    <div className="movie-list">
      {searchMovieList.length !== 0 ? (
        searchMovieList.map((movie) => {
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
        })
      ) : (
        <div>No Movie Found</div>
      )}
    </div>
  );
};

export default SearchedMovies;
