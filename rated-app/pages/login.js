import React, { useState, useContext } from "react";
// import { Form } from "../styles";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";
import Link from "next/link";
import styled from "@emotion/styled";
import AuthContext from "../stores/authContext";

export default function login() {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  // console.log(username);
  // console.log(password);
  console.log(user);

  // const handleSubmit = async (data) => {
  //   console.log(data);

  //   try {
  //     const response = await axios.post(`${BASE_API_URL}/users/login`, data);
  //     console.log(gone);
  //     setUser(response.data);
  //     localStorage.setItem(res.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log("error", error.response.data);
  //     }
  //   }

  //   // router.push("/");
  // };

  return (
    <Form>
      <form onSubmit={login}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            autoComplete="off"
            tabIndex={1}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="user_password"
            placeholder="Enter your password"
            autoComplete="off"
            tabIndex={2}
            required
          />
        </div>

        <button type="submit">Login</button>
        <span className="login-screen__subtext">
          Don't have an account? <Link href="/signup">Register</Link>
        </span>
      </form>
    </Form>
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
    background-color: #006fff;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 12px 5px;
    margin: 12px 0;
    font: 1em sans-serif;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #999;
  }
`;
