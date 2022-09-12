import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "./Post/Post";
import classes from "./Posts.module.css";
const Posts = function Posts({ posts }) {
  return posts.length > 0 ? (
    <TransitionGroup>
      {posts.map((post) => {
        return (
          <CSSTransition key={post.id} timeout={500} classNames="item">
            <Post key={post.id} post={post}></Post>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  ) : (
    <div className={classes.Empty}>
      Empty Post<span></span>
    </div>
  );
};
export default Posts;
