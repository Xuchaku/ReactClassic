import { useId } from "react";
import classes from "./Input.module.css";
function Input({ labelText, type, value, onChange }) {
  const uniqId = useId();
  function onChangeHandler(event) {
    onChange(event.target.value);
  }
  return (
    <>
      <label htmlFor={uniqId}>{labelText}</label>
      <input
        value={value}
        className={classes.GreenInput}
        type={type}
        onChange={onChangeHandler}
        id={uniqId}
      />
    </>
  );
}
export default Input;
