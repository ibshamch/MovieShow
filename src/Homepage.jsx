import { useEffect, useState } from "react";
import PopularMovieList from "./PopularMovieList";
import MovieSearch from "./MovieSearch";
import "./style.css";
import SearchedMovies from "./SearchedMovies";

const Homepage = () => {
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [searchMovieList, setSearchMovieList] = useState([]);

  const fetchMovieData = async (name) => {
    try {
      const resApi = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=fcf2f2dc3707b096720754062fdacf03&query=${name}`,
      );
      const json = await resApi.json();
      const data = json.results;
      setSearchMovieList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const apiRes = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=fcf2f2dc3707b096720754062fdacf03`,
      );
      const json = await apiRes.json();
      const result = json.results;
      setMovieList(result);
    };
    fetchPopularMovies();
  }, []);

  return (
    <div className="app">
      <MovieSearch
        fetchMovieData={fetchMovieData}
        movieName={movieName}
        setMovieName={setMovieName}
      />
      {searchMovieList.length === 0 ? (
        <PopularMovieList movieList={movieList} />
      ) : (
        <SearchedMovies searchMovieList={searchMovieList} />
      )}
    </div>
  );
};

export default Homepage;
