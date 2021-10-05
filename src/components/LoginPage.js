import React, { useState, useEffect } from "react";
import classes from "./LoginPage.module.css";
import Spinner from "./Spinner";
function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
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

    if (response.ok == false) {
      console.log(response);
      alert("Authentication failed");
    } else {
      const data = await response.json();
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
