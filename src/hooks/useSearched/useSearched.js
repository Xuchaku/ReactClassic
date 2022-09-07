import { usePosts } from "../usePosts/usePosts";
import { useMemo } from "react";
export const useSearched = (posts, sort, query) => {
  const sortedPosts = usePosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    if (!query) return sortedPosts;
    console.log(sort);
    return [...sortedPosts].filter((item) => {
      return item[sort || "description"].includes(query);
    });
  }, [query, sortedPosts, sort]);
  return sortedAndSearchedPosts;
};
