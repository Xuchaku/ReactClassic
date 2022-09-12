import { useEffect, useState, useCallback } from "react";
import Modal from ".././UI/Modal/Modal";
import { data } from ".././mockdata/postData";
import { useSearched } from ".././hooks/useSearched/useSearched";
import SERVICE from ".././API/PostService";
import { renameKey, pagesArr } from "../utils/Utils";
import Pagination from ".././components/Pagination/Pagination";
import { TOTAL_PAGE_COUNT, TOTAL_ITEMS_ON_PAGE } from "../consts/Consts";
import Filter from "./../components/Filter/Filter";
import ".././App.css";
import Posts from ".././components/Posts/Posts";
function Main({ posts, setPosts }) {
  //const [posts, setPosts] = useState(data);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [selectedPage, setSelectedPage] = useState(1);
  const [numbers, setNumbers] = useState([]);

  const sortedAndSearchedPosts = useSearched(posts, filter.sort, filter.query);

  const addPostHandler = useCallback(function addPostHandler(post) {
    setPosts([...posts, post]);
  }, []);
  const changePostHandler = (id, content) => {
    const changedPosts = [...posts];
    const postId = changedPosts.findIndex((post) => {
      return post.id == id;
    });
    changedPosts[postId].text = content;
    setPosts(changedPosts);
  };

  useEffect(() => {
    fetchPosts(TOTAL_ITEMS_ON_PAGE, selectedPage);
    setNumbers(pagesArr(TOTAL_PAGE_COUNT));
  }, [selectedPage]);
  useEffect(() => {
    console.log("fetch");
    fetchPosts();
  }, []);
  async function fetchPosts(items = TOTAL_ITEMS_ON_PAGE, page = 1) {
    const posts = await SERVICE.getPosts(TOTAL_ITEMS_ON_PAGE, page);
    const newPosts = renameKey(posts, "body", "description");
    setPosts(newPosts);
  }

  function deletePostHandler(post) {
    const changedPosts = posts.filter((currentPost) => {
      return post.id !== currentPost.id;
    });
    setPosts(changedPosts);
  }

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Posts posts={sortedAndSearchedPosts} remove={deletePostHandler}></Posts>
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        numbers={numbers}
      ></Pagination>
      <Modal posts={posts} create={addPostHandler}></Modal>
    </div>
  );
}
export default Main;
