import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <header className={classes.header}>
      <div>
        <h3>AuthLearning</h3>
      </div>
      <div className={classes.headerRight}>
        <NavLink activeClassName={classes.active} to="/LoginPage">
          Home
        </NavLink>
        <NavLink activeClassName={classes.active} to="/MyProfile">
          My Profile
        </NavLink>
        <button>Logout</button>
      </div>
    </header>
  );
}

export default NavBar;
