import React, { useState, useEffect } from "react";
import classes from "./WelcomePage.module.css";
function WelcomePage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPwd(e.target.value);
  };
  return (
    <div className={classes.formPage}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Email</label>
        <input onChange={emailChangeHandler} value={email} type="email"></input>
        <label>New Password</label>
        <input onChange={passwordChangeHandler} value={pwd} type="pwd"></input>
        <button type="submit">Change password</button>
      </form>
    </div>
  );
}

export default WelcomePage;
