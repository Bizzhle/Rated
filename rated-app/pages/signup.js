import React, { useState } from "react";
import { Form } from "../styles";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";

export default function signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  console.log(password);

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
    router.push("/login");
  };

  return (
    <Form>
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

        <button type="submit">Sign up</button>
      </form>
    </Form>
  );
}
