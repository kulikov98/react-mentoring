import { createPortal } from "react-dom";
import React, { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

const container = typeof document === "undefined" ? React.createElement('div') :  document.body;

const Dialog = ({ title, children, onClose }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.classList.add("fade-in");
  });

  return (
    <div className={styles.dialog}>
      <div ref={contentRef} className={styles.content}>
        <button
          data-testid="close-btn"
          className={styles.close}
          onClick={onClose}
        ></button>

        <header className={styles.header}>{title}</header>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default (props) => createPortal(<Dialog {...props} />, container);
