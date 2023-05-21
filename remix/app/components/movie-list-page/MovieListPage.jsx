import {
  useLoaderData,
  useSearchParams,
  Outlet,
  useNavigate,
  useLocation,
} from "@remix-run/react";
import styles from "./MovieListPage.module.css";

import GenreSelect from "../genre-select/GenreSelect";
import SortControl from "../sort-control/SortControl";
import MovieTitle from "../movie-tile/MovieTile";

export const genres = [
  { name: "documentary", id: "1" },
  { name: "history", id: "2" },
  { name: "comedy", id: "3" },
  { name: "horror", id: "4" },
  { name: "crime", id: "5" },
];

export const defaultParams = {
  searchBy: "title",
  sortBy: "release_date",
  genre: genres[0].name,
  sortOrder: "desc",
};

const Logo = () => (
  <a href="/" className={styles.logo}>
    <span>netflix</span>roulette
  </a>
);

const MovieListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieList = useLoaderData();

  const handleSortSelect = (sortBy) => {
    const sortOrder = sortBy === "release_date" ? "desc" : "asc";
    setSearchParams((prev) => {
      prev.set("sortOrder", sortOrder);
      prev.set("sortBy", sortBy);
      return prev;
    });
  };

  const handleGenreSelect = (name) =>
    setSearchParams((prev) => {
      prev.set("genre", name);
      return prev;
    });

  const handleMovieSelect = (movie) => navigate(`/movies/${movie.id}`);

  return (
    <>
      <section className={styles.search}>
        <header>
          <Logo />
          {location.pathname === "/movies" ? (
            <button className={styles.add} onClick={() => navigate("/movies/new")}>
              + add movie
            </button>
          ) : (
            <button
              data-testid="search-btn"
              className={styles.searchBtn}
              onClick={() => navigate("/")}
            ></button>
          )}
        </header>

        <Outlet />
      </section>

      <main className={styles.main}>
        <section className={styles.controls}>
          <GenreSelect
            genres={genres}
            selected={searchParams.get("genre") ?? defaultParams.genre}
            onSelect={handleGenreSelect}
          />

          <div className={styles.sort}>
            <span>sort by</span>
            <SortControl
              preselected={searchParams.get("sortBy") ?? defaultParams.sortBy}
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
