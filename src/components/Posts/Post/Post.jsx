import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import Button from "../../../UI/Button/Button";

function Post(props) {
  const { id, title, description } = props.post;
  function deletePostHandler() {
    props.remove(props.post);
  }
  return (
    <div className={classes.postWrapper}>
      <div className={classes.informationWrapper}>
        <h3>
          <span>{id}</span>. {title}
        </h3>
        <p>{description}</p>
      </div>
      <div className={classes.buttonWrapper}>
        <Button onClick={deletePostHandler}>Delete</Button>
        <Button>
          <Link to={"./main/" + id}>Change</Link>
        </Button>
      </div>
    </div>
  );
}
export default Post;
