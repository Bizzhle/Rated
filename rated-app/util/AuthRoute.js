import { useRouter } from "next/router";
const AuthRoute = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("user");

      // If there is no access token we redirect to "/" page.
      if (accessToken) {
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      if (!accessToken) {
        return <WrappedComponent {...props} />;
      }
    }

    // If we are on server, return null
    return null;
  };
};

export default AuthRoute;

// import { useRouter } from "next/router";
// import React, { useState, useContext } from "react";

// import AuthContext from "../stores/authContext";

// const isBrowser = () => typeof window !== "undefined";

// const AuthRoute = ({ router, children }) => {
//   // const router = useRouter();
//   const { user } = useContext(AuthContext);

//   // let pathIsProtected = unprotected

//   if (isBrowser() && user) {
//     router.push("/");
//   }

//   return children;
// };

// export default AuthRoute;
