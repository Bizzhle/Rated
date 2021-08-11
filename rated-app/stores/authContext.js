import { Children, createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BASE_API_URL } from "../pages/api/constants";
import axios from "axios";

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

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const login = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const response = await axios.post(`/api/v1/users/login`, user, {
        withCredentials: true,
      });

      setUser(response.data.user);
      setError("");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  const logout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/v1/users/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }

    setUser("");
    setUsername("");
    setPassword("");

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
