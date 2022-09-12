import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from ".././UI/Modal/Modal";
import { fetchPosts } from "../store/reducers/postsSlice";
import { useSearched } from ".././hooks/useSearched/useSearched";
import { pagesArr } from "../utils/Utils";
import Pagination from ".././components/Pagination/Pagination";
import { TOTAL_PAGE_COUNT } from "../consts/Consts";
import Filter from "./../components/Filter/Filter";
import ".././App.css";
import Posts from ".././components/Posts/Posts";

function Main({ posts }) {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [selectedPage, setSelectedPage] = useState(1);
  const [numbers, setNumbers] = useState([]);

  const sortedAndSearchedPosts = useSearched(posts, filter.sort, filter.query);

  useEffect(() => {
    dispatch(fetchPosts(selectedPage));
    setNumbers(pagesArr(TOTAL_PAGE_COUNT));
  }, [selectedPage]);

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Posts posts={sortedAndSearchedPosts}></Posts>
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        numbers={numbers}
      ></Pagination>
      <Modal></Modal>
    </div>
  );
}
export default Main;
