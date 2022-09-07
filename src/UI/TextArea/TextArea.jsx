import React from "react";
import classes from "./TextArea.module.css";
export default function TextArea({ children, ...props }) {
  return <textarea className={classes.TextArea}>{children}</textarea>;
}
