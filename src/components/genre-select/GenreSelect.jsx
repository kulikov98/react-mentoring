import styles from "./GenreSelect.module.css";

const GenreSelect = ({ genres, selected, onSelect }) => {
  return (
    <div className={styles.genreSelect}>
      {genres.map(({ id, name }) => (
        <div key={id}>
          <input
            type="radio"
            name="genre"
            id={`genre-${id}`}
            value={id}
            checked={name === selected}
            onChange={() => onSelect(name)}
          />
          <label htmlFor={`genre-${id}`}>{name}</label>
        </div>
      ))}
    </div>
  );
};

export default GenreSelect;
