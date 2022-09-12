import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import "./App.css";
import About from "./Pages/About";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Navigation from "./components/Navigation/Navigation";
import PostId from "./Pages/PostId";
import { Auth } from "./context/Auth";
import { data } from "./mockdata/postData";

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(data);
  const links = [
    { path: "/main", text: "Main" },
    { path: "/about", text: "About" },
    { path: "/login", text: "Login" },
  ];
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    navigate("./main");
  }, []);
  return (
    <Auth.Provider value={{ isAuth, setIsAuth }}>
      <Routes>
        <Route path="/" element={<Navigation links={links} />}>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/main"
            element={<Main posts={posts} setPosts={setPosts} />}
          ></Route>
          <Route path="/main/:id" element={<PostId />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Auth.Provider>
  );
}
export default App;
