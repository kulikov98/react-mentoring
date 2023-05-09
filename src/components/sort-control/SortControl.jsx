import { useState } from "react";
import styles from "./SortControl.module.css";
import cn from "classnames";

export const SortControl = ({ preselected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(preselected);

  const createClass = (name) =>
    cn({
      [styles[name]]: true,
      [styles[`${name}--open`]]: open,
    });

  const options = [
    { name: "Title", value: "title" },
    { name: "Release Date", value: "release_date" },
  ];

  const handleClick = (value) => {
    setOpen(false);
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className={styles.select}>
      <div
        data-testid="selected"
        className={createClass("selected")}
        onClick={() => setOpen(!open)}
      >
        {options.find((o) => o.value === selected).name}
      </div>

      <ul data-testid="options" className={createClass("options")}>
        {options.map((opt) => (
          <li
            className={styles.option}
            key={opt.value}
            onClick={() => handleClick(opt.value)}
          >
            {opt.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortControl;
