import cn from "classnames";
import styles from "./Button.module.css";

const Button = (props) => {
  const classes = cn(styles.button, {
    [styles["button--primary"]]: props.primary,
    [styles["button--secondary"]]: !props.primary,
    [styles["button--large"]]: props.size === "large",
    [styles["button--medium"]]: props.size === "medium",
  });

  return (
    <button
      type={props.type}
      className={classes}
      onClick={props.onClick}
      style={props.style}
      data-testid="btn"
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  primary: true,
  size: "medium",
  type: "button",
};

export default Button;
