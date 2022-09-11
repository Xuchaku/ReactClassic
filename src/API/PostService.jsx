class API {
  async getPosts(count = "", page = 1) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${count}&_page=${page}`
    );
    const posts = await response.json();
    return posts;
  }
}
const SERVICE = new API();
export default SERVICE;
