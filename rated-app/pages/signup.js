import React, { useState } from "react";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";
import styled from "@emotion/styled";

import axios from "axios";
import { FormPadding, LoginForm } from "../styles";

export default function signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_API_URL}/users/signup`, {
        username,
        password,
      });
      console.log(res);
    } catch (error) {
      if (error.res) {
        console.log("error", error.res.data);
      }
    }
    setUsername("");
    setPassword("");
    // router.push("/login");
  };

  return (
    <FormPadding>
      <LoginForm>
        <h2>Get started</h2>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              name="user_password"
              value={password}
              placeholder="Enter your password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">SIGN UP</button>
        </form>
      </LoginForm>
    </FormPadding>
  );
}

export const MainPadding1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dde3df;
  padding: 0 10px;
  border: 2px solid red;
  height: 100vh;
`;
