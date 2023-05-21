import Button from "../button/Button";
import styles from "./SearchForm.module.css";

const SearchForm = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.code !== "Enter") return;
    onSearch();
  };

  return (
    <div className={styles["search-block"]}>
      <input
        type="text"
        className={styles.input}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        data-testid="search-input"
      />
      <Button label="Search" size="large" onClick={onSearch} />
    </div>
  );
};

export default SearchForm;
