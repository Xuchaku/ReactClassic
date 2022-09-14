import { memo } from "react";
import classes from "./Button.module.css";

const Button = memo(function Button({ children, ...props }) {
  return (
    <button {...props} className={classes.GreenButton}>
      {children}
    </button>
  );
});
export default Button;
