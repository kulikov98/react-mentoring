import styles from "./MovieTile.module.css";

const MovieTile = ({ movie, onClick }) => {
  const { poster_path, title, genres, release_date } = movie;

  return (
    <article className={styles.tile} onClick={() => onClick(title)}>
      <img data-testid="poster" src={poster_path} alt={`poster of the movie "${title}"`} />
      <footer className={styles.footer}>
        <div className={styles.description}>
          <span data-testid="title" className={styles.name}>{title}</span>
          <span data-testid="genres" className={styles.genre}>{genres.join(", ")}</span>
        </div>
        <div className={styles.year}>
          <span data-testid="release-date">{release_date.split("-")[0]}</span>
        </div>
      </footer>
    </article>
  );
};

export default MovieTile;
