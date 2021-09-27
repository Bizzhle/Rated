import React, { useState, useContext } from "react";
import AuthContext from "../stores/authContext";
import { FormPadding, LoginForm } from "../styles";
import AuthRoute from "../util/AuthRoute";

const login = () => {
  const {
    login,

    setUsername,
    setPassword,
    error,
    setError,
  } = useContext(AuthContext);

  return (
    <FormPadding>
      <LoginForm>
        <h2>Login</h2>
        <form onSubmit={login}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              // autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="user_password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              // autoComplete="off"
              required
            />
          </div>
          {error ? <p>{error}</p> : ""}

          <button type="submit">Login</button>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export default AuthRoute(login);
