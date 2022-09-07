import classes from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";

function Form({ posts, create, show }) {
  const [dataForm, setDataForm] = useState({ title: "", description: "" });
  const addNewPostHandler = (e) => {
    let { title, description } = dataForm;
    create({ title, description, id: posts.length + 1 });
    console.log({ title, description });
  };
  function dataFormHandler(field) {
    return function (value) {
      console.log(field);
      setDataForm({ ...dataForm, [field]: value });
    };
  }
  return (
    <form className={classes.Form} onSubmit={(event) => event.preventDefault()}>
      <Button
        onClick={show}
        style={{
          width: 25,
          height: 25,
          padding: 0,
          position: "absolute",
          right: 0,
          top: 0,
          margin: "5px 10px",
        }}
      >
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
