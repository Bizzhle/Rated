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

  const [user, setUser] = useState(null);
  console.log(user);

  // useEffect(() => {
  //   document.addEventListener("login", (user) => {
  //     setUser(user);
  //   });
  // }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  });

  const login = async (data) => {
    console.log("login attempted");

    // const user = { username, password };

    // try {
    //   const response = await axios.post(`${BASE_API_URL}/users/login`, data, {
    //     username,
    //     password,
    //   });
    //   console.log("logged in");
    //   setUser(response.data);
    //   localStorage.setItem({ username, password }, res.data);
    //   console.log(response.data);
    // } catch (error) {
    //   if (error.response) {
    //     console.log("error", error.response.data);
    //   }
    // }

    router.push("/");
  };

  const context = { user, login };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
