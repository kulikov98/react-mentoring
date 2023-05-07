import SearchForm from "../search-form/SearchForm";
import GenreSelect from "../genre-select/GenreSelect";
import SortControl from "../sort-control/SortControl";
import MovieTitle from "../movie-tile/MovieTile";
import MovieDetails from "../movie-details/MovieDetails";
import styles from "./MovieListPage.module.css";
import { useEffect, useState } from "react";
import MovieApi from "../../open-api/api/MovieApi";

const genres = [
  { name: "documentary", id: "1" },
  { name: "history", id: "2" },
  { name: "comedy", id: "3" },
  { name: "horror", id: "4" },
  { name: "crime", id: "5" },
];

const Logo = () => (
  <a href="/" className={styles.logo}>
    <span>netflix</span>roulette
  </a>
);

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [sortCriterion, setSortCriterion] = useState({
    sortBy: "release_date",
    sortOrder: "desc",
  });
  const [movieList, setMovieList] = useState([]);

  const [activeGenre, setActiveGenre] = useState(genres[0].name);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSortSelect = (sortBy) => {
    const sortOrder = sortBy === "release_date" ? "desc" : "asc";
    setSortCriterion({ sortBy, sortOrder });
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const movieApi = new MovieApi();

  useEffect(() => {
    const config = {
      search: searchQuery,
      searchBy: "title",
      ...sortCriterion,
      filter: [activeGenre],
    };

    (async function () {
      movieApi.moviesGet(config, (err, data) => {
        if (err) {
          // show err;
          return;
        }
        setMovieList(data.data);
      });
    })();
  }, [searchQuery, sortCriterion, activeGenre]);

  return (
    <>
      <section className={styles.search}>
        <header>
          <Logo />
          {selectedMovie === null ? (
            <button className={styles.add}>+ add movie</button>
          ) : (
            <button
              data-testid="search-btn"
              className={styles.searchBtn}
              onClick={() => setSelectedMovie(null)}
            ></button>
          )}
        </header>

        {selectedMovie === null ? (
          <div className={styles.container}>
            <h1>find your movie</h1>
            <SearchForm
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={console.log}
            />
          </div>
        ) : (
          <MovieDetails movie={selectedMovie} />
        )}
      </section>

      <main className={styles.main}>
        <section className={styles.controls}>
          <GenreSelect
            genres={genres}
            selected={activeGenre}
            onSelect={setActiveGenre}
          />

          <div className={styles.sort}>
            <span>sort by</span>
            <SortControl
              preselected={sortCriterion.sortBy}
              onSelect={handleSortSelect}
            />
          </div>
        </section>

        <div className={styles.count}>
          <span>{movieList.length}</span> movies found
        </div>

        <section data-testid="results" className={styles.results}>
          {movieList.map((movie) => (
            <MovieTitle
              key={movie.id}
              movie={movie}
              onClick={handleMovieSelect}
            />
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <Logo />
      </footer>
    </>
  );
};

export default MovieListPage;
