import React, { useState, useContext } from "react";
// import { Form } from "../styles";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";
import Link from "next/link";
import styled from "@emotion/styled";
import AuthContext from "../stores/authContext";

export default function login() {
  const { login, username, password, setUsername, setPassword } =
    useContext(AuthContext);

  console.log(username);
  console.log(password);

  return (
    <form onSubmit={login}>
      <Form>
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

        <button type="submit">Login</button>
        <span className="login-screen__subtext">
          Don't have an account? <Link href="/signup">Register</Link>
        </span>
      </Form>
    </form>
  );
}

const Form = styled.div`
  border-radius: 2px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  max-width: 28rem;
  margin: 10px auto;
  padding: 20px 10px;
  /* background-color: #d1d5eb; */

  label {
    font-weight: 700;
    font-size: 1.2rem;
  }

  input,
  textarea,
  select {
    font: sans-serif;
    font-size: 1.3rem;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #999;
    outline: none;
  }

  input,
  select {
    padding: 12px 10px;

    font-size: 1.3rem;
  }

  textarea {
    height: 60px;
    margin: 10px 0;
    padding: 5px;
  }

  select {
    padding: 8px 5px;
    margin: 8px 0;
  }

  /* & div {
    margin: 10px 0;
  } */
  input[type="submit"] {
    background-color: #006fff;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #429ecb;
    letter-spacing: 1px;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 12px 5px;
    margin: 12px 0;
    font: 1.3em sans-serif;
    width: 100%;
    box-sizing: border-box;
    /* border: 1px solid #999; */
  }
`;
