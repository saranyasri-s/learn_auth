import React, { useContext } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/AuthContext";
function NavBar() {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  console.log("nav");
  console.log("loggedIn", loggedIn);
  return (
    <header className={classes.header}>
      <div>
        <h3>AuthLearning</h3>
      </div>
      <div className={classes.headerRight}>
        {!loggedIn && (
          <NavLink activeClassName={classes.active} to="/LoginPage">
            Login
          </NavLink>
        )}

        {loggedIn && (
          <NavLink activeClassName={classes.active} to="/MyProfile">
            My Profile
          </NavLink>
        )}
        {loggedIn && <button>Logout</button>}
      </div>
    </header>
  );
}

export default NavBar;
