import { useMemo } from "react";

export const usePosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (!sort) return posts;
    else {
      return [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort]);
      });
    }
  }, [sort, posts]);
  return sortedPosts;
};
