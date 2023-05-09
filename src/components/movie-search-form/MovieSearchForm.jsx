import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import SearchForm from "../search-form/SearchForm";
import styles from "./MovieSearchForm.module.css";

const MovieSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") ?? ""
  );

  const handleSearch = () =>
    setSearchParams((prev) => {
      prev.set("search", searchQuery);
      return prev;
    });

  return (
    <div className={styles.container}>
      <h1>find your movie</h1>
      <SearchForm
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={handleSearch}
      />
      <Outlet />
    </div>
  );
};

export default MovieSearchForm;
