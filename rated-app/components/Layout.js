import React from "react";
import { Main, MainBody } from "../styles";
import CategoryBar from "./CategoryBar";
import Navbar from "./Navbar";
import NewItem from "./NewItem";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Main>
        {/* <CategoryBar /> */}
        {children}
      </Main>
    </div>
  );
};

export default Layout;
