import { useState } from "react";
import Button from "../button/Button";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState(props.query ?? "");

  const handleKeyDown = (e) => {
    if (e.code !== "Enter") return;
    props.onSearch(searchQuery);
  };

  return (
    <div className={styles["search-block"]}>
      <input
        type="text"
        className={styles.input}
        onKeyDown={handleKeyDown}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        data-testid="search-input"
      />
      <Button
        label="Search"
        size="large"
        onClick={() => props.onSearch(searchQuery)}
      />
    </div>
  );
};

export default SearchForm;
