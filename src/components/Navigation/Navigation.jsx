import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DoorOpenFill } from "react-bootstrap-icons";
import classes from "./Navigation.module.css";
import { Auth } from "../../context/Auth";

export default function Navigation({ links }) {
  let activeStyle = {
    textShadow: "0px 0px 8px rgba(255, 0, 0, 1)",
    color: "red",
    transition: "0.2s",
  };
  const location = useLocation();
  const { isAuth, setIsAuth } = useContext(Auth);

  function handlerAuthOut() {
    setIsAuth(false);
  }

  return (
    <div className={classes.Navigation}>
      {links.map((link, index) => {
        return (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            key={index}
            to={link.path}
          >
            {link.text}
          </NavLink>
        );
      })}
      {isAuth && (
        <NavLink to={location.pathname} onClick={handlerAuthOut}>
          <DoorOpenFill color="red" size={24} />
        </NavLink>
      )}
    </div>
  );
}
