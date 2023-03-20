import cn from "classnames";
import styles from "./Button.module.css";

const Button = (props) => {
  const classes = cn(styles.button, {
    [styles['button--large']]: props.size === 'large',
    [styles['button--medium']]: props.size === 'medium',
  });

  return (
    <button type="button" className={classes} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
