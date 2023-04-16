import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

const Dialog = ({ title, children, onClose }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.classList.add("fade-in");
  });

  return (
    <div className={styles.dialog}>
      <div ref={contentRef} className={styles.content}>
        <button className={styles.close} onClick={onClose}></button>

        <header className={styles.header}>{title}</header>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default (props) => createPortal(<Dialog {...props} />, document.body);
