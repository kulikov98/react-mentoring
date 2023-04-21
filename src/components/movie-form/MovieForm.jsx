import React, { useState } from "react";
import Button from "../button/Button";
import MultiSelectDropdown from "../multi-select/MultiSelectDropdown";
import styles from "./MovieForm.module.css";

const genres = [
  { value: "Action", label: "Action" },
  { value: "Adventure", label: "Adventure" },
  { value: "Animation", label: "Animation" },
  { value: "Comedy", label: "Comedy" },
  { value: "Crime", label: "Crime" },
  { value: "Documentary", label: "Documentary" },
  { value: "Drama", label: "Drama" },
  { value: "Family", label: "Family" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "History", label: "History" },
  { value: "Horror", label: "Horror" },
  { value: "Music", label: "Music" },
  { value: "Mystery", label: "Mystery" },
  { value: "Romance", label: "Romance" },
  { value: "Science Fiction", label: "Science Fiction" },
  { value: "TV Movie", label: "TV Movie" },
  { value: "Thriller", label: "Thriller" },
  { value: "War", label: "War" },
  { value: "Western", label: "Western" },
];

const MovieForm = ({ movie, onSubmit }) => {
  const [selectedGenres, setSelectedGenres] = useState(movie?.genres ?? []);

  const handleSelectChange = (newSelectedGenres) =>
    setSelectedGenres(newSelectedGenres);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.genres = selectedGenres;
    onSubmit(data);
  };

  const handleReset = () => setSelectedGenres(movie?.genres ?? []);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className={styles.form}>
      <label>
        title
        <input type="text" name="title" defaultValue={movie?.title} />
      </label>

      <label>
        release date
        <input type="date" name="date" defaultValue={movie?.release_date} />
      </label>

      <label>
        url
        <input type="text" name="url" defaultValue={movie?.poster_path} />
      </label>

      <label>
        rating
        <input type="number" name="rating" defaultValue={movie?.vote_average} />
      </label>

      <label data-testid="genre" htmlFor="">
        genre
        <MultiSelectDropdown
          placeholder="Select genre"
          options={genres}
          selectedOptions={selectedGenres}
          onChange={handleSelectChange}
        />
      </label>

      <label>
        runtime
        <input type="number" name="runtime" defaultValue={movie?.runtime} />
      </label>

      <label className={styles.textarea}>
        overview
        <textarea
          name="overview"
          cols="30"
          rows="10"
          defaultValue={movie?.overview}
        ></textarea>
      </label>

      <footer>
        <Button primary={false} label="Reset" type="reset" />
        <Button label="Submit" type="submit" />
      </footer>
    </form>
  );
};

export default MovieForm;
