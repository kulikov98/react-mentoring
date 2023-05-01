import { useLoaderData } from "react-router-dom";
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const {
    poster_path,
    title,
    genres,
    release_date,
    vote_average,
    runtime,
    overview,
  } = useLoaderData();

  return (
    <article className={styles.details} data-testid="movie-details">
      <img data-testid="poster" src={poster_path} alt={`poster of the movie "${title}"`} />

      <div className={styles.description}>
        <header className={styles.header}>
          <h1 data-testid="title">{title}</h1>
          {vote_average ? <span data-testid="rating">{vote_average}</span> : null}
        </header>

        <span data-testid="genres" className={styles.genre}>{genres.join(", ")}</span>

        <div className={styles.params}>
          <span data-testid="release-date">{release_date.split("-")[0]}</span>
          <span data-testid="duration">{`${Math.round(runtime / 60)}h ${runtime % 60}min`}</span>
        </div>

        <p data-testid="description" className={styles.text}>{overview}</p>
      </div>
    </article>
  );
};

export default MovieDetails;