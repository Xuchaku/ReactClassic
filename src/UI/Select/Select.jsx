import { useEffect } from "react";
import classes from "./Select.module.css";
function Select({ value, options, title, sort }) {
  const uniqId = Math.random() + "__Select";
  function onChangeHandler(e) {
    sort(e.target.value);
  }
  return (
    <>
      <label htmlFor={uniqId}>{title}</label>
      <select
        value={value}
        onChange={onChangeHandler}
        className={classes.Select}
        id={uniqId}
      >
        <option disabled value="">
          {title}
        </option>
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default Select;
