import React, { useState } from 'react';
import styles from './MultiSelectDropdown.module.css';

const MultiSelectDropdown = ({ options, selectedOptions, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];

    onChange(newSelectedOptions);
  };

  const selectedOptionLabels = selectedOptions.map((option) => {
    const selectedOption = options.find((o) => o.value === option);
    return selectedOption ? selectedOption.label : option;
  });

  return (
    <div className={styles.container}>
      <div className={styles.selectedOptions} onClick={handleToggle}>
        {selectedOptions.length > 0 ? selectedOptionLabels.join(', ') : placeholder}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`} />
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {options.map(({ value, label }) => (
            <label key={value} className={styles.option}>
              <input
                type="checkbox"
                value={value}
                checked={selectedOptions.includes(value)}
                onChange={() => handleOptionToggle(value)}
              />
              {label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
