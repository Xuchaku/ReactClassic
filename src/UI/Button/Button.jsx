import classes from "./Button.module.css";
import { memo } from "react";
const Button = memo(function Button({ children, ...props }) {
  return (
    <button {...props} className={classes.GreenButton}>
      {children}
    </button>
  );
});
export default Button;
