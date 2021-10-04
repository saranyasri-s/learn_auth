import React, { useState, useEffect } from "react";
import classes from "./LoginPage.module.css";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
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
        <input onChange={emailChangeHandler} value={email} type="email"></input>
        <label>Password</label>
        <input onChange={passwordChangeHandler} value={pwd} type="pwd"></input>
        <button type="submit">
          {isLogin ? "Login" : "Signin"}
        </button>
      </form>
      <button
        onClick={changeLoginStateHandler}
        className={classes.switchButton}
      >
        click here to {isLogin ? "Signin" : "Login"}
      </button>
    </div>
  );
}

export default LoginPage;
