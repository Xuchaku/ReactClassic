import React from "react";
import { useParams } from "react-router-dom";
import classes from "./styles/Post.module.css";
import Button from "../UI/Button/Button";
import TextArea from "../UI/TextArea/TextArea";

export default function PostId() {
  const params = useParams();
  return (
    <div className={classes.WrapperPost}>
      <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
        <TextArea>{params.id}</TextArea>
        <Button>Save</Button>
      </form>
    </div>
  );
}
