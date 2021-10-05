import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const isLoggenIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logOutHandler = () => {
    setToken(null);
  };
  const authContextValue = {
    token: token,
    isLoggedIn: isLoggenIn,
    logIn: loginHandler,
    logOut: logOutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
