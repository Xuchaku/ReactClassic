import { memo } from "react";
import classes from "./Pagination.module.css";

const Pagination = memo(function Pagination({
  numbers,
  selectedPage,
  setSelectedPage,
}) {
  function changeSelectedHandler(value) {
    setSelectedPage(value);
  }

  return (
    <div className={classes.Pagination}>
      {numbers.map((item) => {
        return (
          <p
            className={selectedPage === item ? classes.Selected : ""}
            key={item}
            onClick={changeSelectedHandler.bind(null, item)}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
});
export default Pagination;
