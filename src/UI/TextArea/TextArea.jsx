import React from "react";
import { forwardRef } from "react";
import classes from "./TextArea.module.css";
export default forwardRef(function TextArea({ children, ...props }, ref) {
  return (
    <textarea {...props} ref={ref} className={classes.TextArea}>
      {children}
    </textarea>
  );
});
