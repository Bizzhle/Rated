import styled from "@emotion/styled";
import React from "react";
import { Main, MainBody } from "../styles";
import CategoryBar from "./CategoryBar";
import Navbar from "./Navbar";
import NewItem from "./NewItem";

const Layout = ({ children }) => {
  return (
    <>
      <FixedDiv>
        <Navbar />
        <CategoryBar />
      </FixedDiv>

      <Main>
        {/* <CategoryBar /> */}
        {children}
      </Main>
    </>
  );
};

export default Layout;

const FixedDiv = styled.div`
  position: fixed;
  overflow: hidden;
  background-color: white;
  top: 0;
  z-index: 10;

  width: 100vw;
`;
