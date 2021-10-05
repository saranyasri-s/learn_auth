import React, { useState, useEffect, useContext } from "react";
import classes from "./LoginPage.module.css";
import Spinner from "./Spinner";
import AuthContext from "../store/AuthContext";
function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const authCtx = useContext(AuthContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      console.log("isLogintrue");
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9c9tIlGEvkwzYEkhWjVoudJ_A8DHGnqI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9c9tIlGEvkwzYEkhWjVoudJ_A8DHGnqI";
    }
    setIsLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pwd,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(response);
      alert("Authentication failed");
    } else {
      const data = await response.json();
      if (isLogin) {
        authCtx.logIn(data.idToken);
      }
      console.log(data);
    }
    setIsLoading(false);
    setIsLogin(true);
    setPwd("");
    setEmail("");
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPwd(e.target.value);
  };
  const changeLoginStateHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={classes.formPage}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Email</label>
        <input
          required
          onChange={emailChangeHandler}
          value={email}
          type="email"
        ></input>
        <label>Password</label>
        <input
          required
          onChange={passwordChangeHandler}
          value={pwd}
          type="pwd"
        ></input>
        {isLoading && <Spinner />}
        {!isLoading && (
          <button type="submit">{isLogin ? "Login" : "SignUp"}</button>
        )}
      </form>
      <button
        onClick={changeLoginStateHandler}
        className={classes.switchButton}
      >
        click here to {isLogin ? "SignUp" : "Login"}
      </button>
    </div>
  );
}

export default LoginPage;
