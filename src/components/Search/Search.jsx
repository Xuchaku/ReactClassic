import Input from "../../UI/Input/Input";
import classes from "./Search.module.css";
function Search({ searchQuery, setSearchQuery, ...props }) {
  function searchQueryHandler(value) {
    setSearchQuery(value);
  }
  return (
    <div className={classes.Search}>
      <Input
        {...props}
        value={searchQuery}
        labelText={"Search"}
        type={"text"}
        onChange={searchQueryHandler}
      ></Input>
    </div>
  );
}
export default Search;
