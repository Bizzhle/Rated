import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";

import { FormPadding, LoginForm } from "../styles";
import AuthRoute from "../util/AuthRoute";

const signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  console.log(error);

  useEffect(() => {
    if (successMsg === "success") {
      router.push("/login");
    }
  }, [successMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const response = await axios.post(`/api/v1/users/signup`, user, {
        withCredentials: true,
      });

      setSuccessMsg(response.data.status);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
    setUsername("");
    setPassword("");
  };

  return (
    <FormPadding>
      <LoginForm>
        <h2>Let's Get Started</h2>

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
          {error ? <p>{error}</p> : ""}

          <button type="submit">SIGN UP</button>
          <>
            Already have an account?{" "}
            <Link href="/login">
              <span>Login here</span>
            </Link>
          </>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export default AuthRoute(signup);

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
