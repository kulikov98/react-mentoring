import { useState } from "react";
import Image from "../image/Image";
import styles from "./MovieTile.module.css";
import { useNavigate } from "react-router-dom";

const MovieTile = ({ movie, onClick }) => {
  const navigate = useNavigate();
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const { poster_path, title, genres, release_date } = movie;

  const onOptionSelect = (action) => {
    setOptionsOpen(false);
    navigate(`/movies/${movie.id}/${action}`);
  };

  return (
    <article
      className={styles.tile}
      onMouseOver={() => setOptionsVisible(true)}
      onMouseLeave={() => setOptionsVisible(false)}
    >
      {isOptionsVisible && !isOptionsOpen && (
        <button
          onClick={() => setOptionsOpen(true)}
          className={styles.optionsBtn}
        >
          ...
        </button>
      )}
      {isOptionsOpen && (
        <div className={styles.options}>
          <span
            className={styles.close}
            onClick={() => setOptionsOpen(false)}
          ></span>
          <ul>
            <li onClick={() => onOptionSelect("edit")}>Edit</li>
            <li onClick={() => alert("not implemented yet!")}>Delete</li>
          </ul>
        </div>
      )}

      <div onClick={() => onClick(movie)}>
        <Image
          src={poster_path}
          alt={`poster of the movie "${title}"`}
          style={{ aspectRatio: 2 / 3 }}
        />

        <footer className={styles.footer}>
          <div className={styles.description}>
            <span data-testid="title" className={styles.name}>
              {title}
            </span>
            <span data-testid="genres" className={styles.genre}>
              {genres.join(", ")}
            </span>
          </div>
          <div className={styles.year}>
            <span data-testid="release-date">{release_date.split("-")[0]}</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default MovieTile;
