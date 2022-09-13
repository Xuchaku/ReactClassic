import React from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePostHandler } from "../store/reducers/postsSlice";
import classes from "./styles/Post.module.css";
import Button from "../UI/Button/Button";
import TextArea from "../UI/TextArea/TextArea";

export default function PostId() {
  const params = useParams();
  const ref = useRef();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => {
    return post.id == params.id;
  });
  const dispatch = useDispatch();

  function postChangeHandler() {
    dispatch(changePostHandler({ id: params.id, content: ref.current.value }));
  }
  return (
    <div className={classes.WrapperPost}>
      <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
        <TextArea ref={ref}>{post?.description}</TextArea>
        <Button onClick={postChangeHandler}>Save</Button>
      </form>
    </div>
  );
}
