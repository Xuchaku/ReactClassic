import React from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useState, useContext } from "react";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./styles/Login.module.css";
import { Auth } from "../context/Auth";

export default function Login() {
  const [user, setUser] = useState({ login: "", password: "" });
  const { isAuth, setIsAuth } = useContext(Auth);
  function handlerUser(field) {
    return function (value) {
      setUser({ ...user, [field]: value });
    };
  }
  let navigate = useNavigate();
  const handlerIn = useCallback(
    function handlerIn() {
      setIsAuth(true);
      navigate("/main");
    },
    [isAuth]
  );
  return (
    <div className={classes.Wrapper}>
      <form className={classes.Login} onSubmit={(e) => e.preventDefault()}>
        <p>Login</p>
        <Input
          labelText={"Nickname"}
          type={"text"}
          value={user.login}
          onChange={handlerUser("login")}
        ></Input>
        <Input
          labelText={"Password"}
          type={"password"}
          value={user.password}
          onChange={handlerUser("password")}
        ></Input>
        <Button onClick={handlerIn}>Login</Button>
      </form>
    </div>
  );
}
