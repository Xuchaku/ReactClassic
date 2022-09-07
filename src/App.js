import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./Pages/About";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Navigation from "./components/Navigation/Navigation";
import PostId from "./Pages/PostId";
import { Auth } from "./context/Auth";
function App() {
  const links = [
    { path: "/main", text: "Main" },
    { path: "/about", text: "About" },
    { path: "/login", text: "Login" },
  ];
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Auth.Provider value={{ isAuth, setIsAuth }}>
      <Navigation links={links}></Navigation>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/main/:id" element={<PostId />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Auth.Provider>
  );
}
export default App;
