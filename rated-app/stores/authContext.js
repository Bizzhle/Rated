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

  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  console.log(user);
  console.log(error);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const login = async (e) => {
    e.preventDefault();
    console.log("login attempted");

    const user = { username, password };

    try {
      const response = await axios.post(`/api/v1/users/login`, user, {
        withCredentials: true,
      });
      // const response = await fetch("/api/v1/users/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "include",
      //   body: JSON.stringify(user),
      // });
      // const data = await response.json();
      // console.log(response.data.user);
      setUser(response.data.user);
      setError("");
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log("error", error.response.data);
        setError(error.response.data.message);
      }
    }
  };

  const logout = async (e) => {
    e.preventDefault();

    console.log("log out attempted");

    try {
      // const response = await axios.post(`${BASE_API_URL}/users/login`, user);
      const response = await fetch(`/api/v1/users/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
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
    error,
    setError,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
