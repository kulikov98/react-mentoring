import { useEffect, useState, useContext } from "react";
import {
  useSearchParams,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styles from "./MovieListPage.module.css";

import { ApiContext } from "../../index";
import GenreSelect from "../genre-select/GenreSelect";
import SortControl from "../sort-control/SortControl";
import MovieTitle from "../movie-tile/MovieTile";

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
  const navigate = useNavigate();
  const location = useLocation();
  const api = useContext(ApiContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);

  const defaultParams = {
    searchBy: "title",
    sortBy: "release_date",
    genre: genres[0].name,
    sortOrder: "desc",
  };

  const setDefaultParams = () => {
    Object.entries(defaultParams).map(([key, value]) => {
      if (searchParams.get(key) === null) {
        setSearchParams((prev) => {
          prev.set(key, value);
          return prev;
        });
      }
    });
  };

  const hasAbsentParams = () =>
    Object.keys(defaultParams).find((key) => searchParams.get(key) === null);

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

  const handleMovieSelect = (movie) => navigate(`/${movie.id}`);

  const search = () => {
    if (location.pathname !== "/") return;

    if (hasAbsentParams()) {
      return setDefaultParams();
    }

    const config = {
      search: searchParams.get("search"),
      searchBy: defaultParams.searchBy,
      sortBy: searchParams.get("sortBy"),
      sortOrder: searchParams.get("sortOrder"),
      filter: [searchParams.get("genre")],
    };

    api.moviesGet(config, (err, data) => {
      if (err) {
        // show err;
        return;
      }
      setMovieList(data.data);
    });
  };

  useEffect(search, [searchParams]);

  return (
    <>
      <section className={styles.search}>
        <header>
          <Logo />
          {location.pathname === "/" ? (
            <button className={styles.add} onClick={() => navigate("/new")}>
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
