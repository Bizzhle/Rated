import { Children, createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BASE_API_URL } from "../pages/api/constants";
import axios from "axios";
// import cookie from "js-cookie";
// import { useCookies } from "react-cookie";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  console.log(user);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  });

  const login = async (e) => {
    e.preventDefault();
    console.log("login attempted");

    const user = { username, password };

    try {
      // const response = await axios.post(`${BASE_API_URL}/users/login`, user);
      const response = await fetch(`${BASE_API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      const data = await response.json();

      setUser(user);

      console.log(data);
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }

    // router.push("/");
  };

  const logout = async (e) => {
    e.preventDefault();

    console.log("log out attempted");

    try {
      // const response = await axios.post(`${BASE_API_URL}/users/login`, user);
      const response = await fetch(`${BASE_API_URL}/users/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }

    setUser("");
    setUsername("");
    setPassword("");

    // localStorage.clear();

    router.push("/login");
  };

  const context = {
    user,
    login,
    logout,
    username,
    password,
    setUsername,
    setPassword,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
