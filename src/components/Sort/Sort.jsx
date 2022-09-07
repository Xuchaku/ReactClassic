import classes from "./Sort.module.css";
import Select from "../../UI/Select/Select";
function Sort({ ...props }) {
  const options = [
    { value: "title", text: "Title" },
    { value: "description", text: "Description" },
  ];
  return (
    <div className={classes.Sort}>
      <Select {...props} options={options} title={"Choose sort"}></Select>
    </div>
  );
}
export default Sort;
