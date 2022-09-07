import Sort from "../Sort/Sort";
import Search from "../Search/Search";
function Filter({ filter, setFilter }) {
  function setSortHandler(sort) {
    setFilter({ ...filter, sort });
  }
  function searchPostsHandler(query) {
    setFilter({ ...filter, query });
  }

  return (
    <>
      <Sort value={filter.sort} sort={setSortHandler}></Sort>
      <Search
        searchQuery={filter.query}
        setSearchQuery={searchPostsHandler}
      ></Search>
    </>
  );
}
export default Filter;
