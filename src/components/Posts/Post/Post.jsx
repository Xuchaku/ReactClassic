import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostHandler } from "../../../store/reducers/postsSlice";
import classes from "./Post.module.css";
import Button from "../../../UI/Button/Button";

function Post(props) {
  const { id, title, description } = props.post;
  const dispatch = useDispatch();
  function deletePost() {
    //props.remove(props.post);
    dispatch(deletePostHandler({ id }));
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
        <Button onClick={deletePost}>Delete</Button>
        <Button>
          <Link to={"./" + id}>Change</Link>
        </Button>
      </div>
    </div>
  );
}
export default Post;
