import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { addPostHandler } from "../../store/reducers/postsSlice";

function Form({ show }) {
  const [dataForm, setDataForm] = useState({ title: "", description: "" });
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const addNewPostHandler = (e) => {
    let { title, description } = dataForm;
    dispatch(
      addPostHandler({
        title,
        description,
        id: posts[posts.length - 1].id + 1,
      })
    );
  };
  function dataFormHandler(field) {
    return function (value) {
      console.log(field);
      setDataForm({ ...dataForm, [field]: value });
    };
  }
  return (
    <form className={classes.Form} onSubmit={(event) => event.preventDefault()}>
      <Button onClick={show} isExitStyle={true}>
        X
      </Button>
      <div className={classes.wrapperInForm}>
        <Input
          value={dataForm.title}
          labelText={"Title"}
          type={"text"}
          onChange={dataFormHandler("title")}
        ></Input>
        <Input
          value={dataForm.description}
          labelText={"Description"}
          type={"text"}
          onChange={dataFormHandler("description")}
        ></Input>
      </div>
      <div className={classes.wrapperInForm}>
        <Button onClick={addNewPostHandler}>Create</Button>
      </div>
    </form>
  );
}
export default Form;
