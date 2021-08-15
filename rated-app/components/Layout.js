import Head from "next/head";
import styled from "@emotion/styled";
import React from "react";
import { Main } from "../styles";
import CategoryBar from "./CategoryBar";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

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
  z-index: 20;
  /* height: 98px; */
  width: 100vw;
`;
