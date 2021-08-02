import React, { useState, useContext } from "react";
// import { Form } from "../styles";

import Link from "next/link";
import styled from "@emotion/styled";
import AuthContext from "../stores/authContext";
import { FormPadding, LoginForm } from "../styles";

export default function login() {
  const {
    user,
    login,
    username,
    password,
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
          <span className="login-screen__subtext">
            Don't have an account? <Link href="/signup">Register</Link>
          </span>
        </form>
      </LoginForm>
    </FormPadding>
  );
}
