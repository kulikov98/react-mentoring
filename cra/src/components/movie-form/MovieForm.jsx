import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../button/Button";
import MultiSelectDropdown from "../multi-select/MultiSelectDropdown";
import styles from "./MovieForm.module.css";

const genres = [
  { value: "Comedy", label: "Comedy" },
  { value: "Crime", label: "Crime" },
  { value: "Documentary", label: "Documentary" },
  { value: "History", label: "History" },
  { value: "Horror", label: "Horror" },
  // { value: "Action", label: "Action" },
  // { value: "Adventure", label: "Adventure" },
  // { value: "Animation", label: "Animation" },
  // { value: "Drama", label: "Drama" },
  // { value: "Family", label: "Family" },
  // { value: "Fantasy", label: "Fantasy" },
  // { value: "Music", label: "Music" },
  // { value: "Mystery", label: "Mystery" },
  // { value: "Romance", label: "Romance" },
  // { value: "Science Fiction", label: "Science Fiction" },
  // { value: "TV Movie", label: "TV Movie" },
  // { value: "Thriller", label: "Thriller" },
  // { value: "War", label: "War" },
  // { value: "Western", label: "Western" },
];

const MovieForm = ({ movie, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount },
  } = useForm();
  const [selectedGenres, setSelectedGenres] = useState(movie?.genres ?? []);

  const submit = (data) => {
    data.genres = selectedGenres;
    onSubmit(data);
  };

  const handleReset = () => {
    reset();
    setSelectedGenres(movie?.genres ?? []);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      onReset={handleReset}
      className={styles.form}
    >
      <label>
        title
        <input
          type="text"
          name="title"
          defaultValue={movie?.title}
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className={styles.error}>Title is required</span>
        )}
      </label>

      <label>
        release date
        <input
          type="date"
          name="release_date"
          defaultValue={movie?.release_date}
          {...register("release_date", { required: true })}
        />
        {errors.release_date && (
          <span className={styles.error}>Release date is required</span>
        )}
      </label>

      <label>
        Poster URL
        <input
          type="text"
          name="poster_path"
          defaultValue={movie?.poster_path}
          {...register("poster_path", { required: true })}
        />
        {errors.poster_path && (
          <span className={styles.error}>Poster url is required</span>
        )}
      </label>

      <label>
        rating
        <input
          type="number"
          name="vote_average"
          defaultValue={movie?.vote_average}
          {...register("vote_average", {
            required: true,
            valueAsNumber: true,
            min: 0.1,
            max: 10,
          })}
        />
        {errors.vote_average?.type === "required" && (
          <span className={styles.error}>Rating is required</span>
        )}
        {errors.vote_average?.type === "min" && (
          <span className={styles.error}>Not less than 0.1</span>
        )}
        {errors.vote_average?.type === "max" && (
          <span className={styles.error}>Not more than 10</span>
        )}
      </label>

      <label data-testid="genre" htmlFor="">
        genre
        <MultiSelectDropdown
          placeholder="Select genre"
          options={genres}
          selectedOptions={selectedGenres}
          onChange={(v) => setSelectedGenres(v)}
        />
        {submitCount > 0 && selectedGenres.length < 1 && (
          <span className={styles.error}>Genre is required</span>
        )}
      </label>

      <label>
        runtime
        <input
          type="number"
          name="runtime"
          defaultValue={movie?.runtime}
          {...register("runtime", { required: true, valueAsNumber: true })}
        />
        {errors.runtime && (
          <span className={styles.error}>Runtime is required</span>
        )}
      </label>

      <label className={styles.textarea}>
        overview
        <textarea
          name="overview"
          cols="30"
          rows="10"
          defaultValue={movie?.overview}
          {...register("overview", { required: true, minLength: 100 })}
        ></textarea>
        {errors.overview?.type === "required" && (
          <span className={styles.error}>Overview is required</span>
        )}
        {errors.overview?.type === "minLength" && (
          <span className={styles.error}>
            Overview should be a minimum of 100 symlols long
          </span>
        )}
      </label>

      <footer>
        <Button primary={false} label="Reset" type="reset" />
        <Button label="Submit" type="submit" />
      </footer>
    </form>
  );
};

export default MovieForm;
