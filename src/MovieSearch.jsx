const MovieSearch = ({ movieName, setMovieName, fetchMovieData }) => {
  return (
    <div className="movieSearch">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchMovieData(movieName);
        }}
      >
        <input
          type="text"
          placeholder="Search for movies"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default MovieSearch;
