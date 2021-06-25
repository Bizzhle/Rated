import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";

const Navbar = () => {
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);
  console.log(isOpen);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        sidebarRef.current !== null &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen]);

  return (
    <Nav>
      <div onClick={showSidebar}>
        <Menu style={{ height: 25, width: 25 }} />
      </div>

      <Link href="/">
        <p>Rated</p>
      </Link>

      <Link href="/item_form">
        <AddItem>
          <AiOutlineForm style={{ height: 20, width: 20 }} />
        </AddItem>
      </Link>

      <SideMenu ref={sidebarRef} isOpen={isOpen} onClick={showSidebar}>
        <div>
          <h2>Rated </h2>
          <CloseMenu onClick={showSidebar} />
        </div>

        <ul>
          <li>
            50 <span>items</span>
          </li>
          <li>
            10 <span>categories</span>
          </li>
          <li>
            7 <span>stores</span>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/category_list">Categories</Link>
          </li>

          <li>
            <Link href="/store_list">Stores </Link>
          </li>
          <li></li>
        </ul>
      </SideMenu>
    </Nav>
  );
};

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 10px 15px;

  /* border-bottom: 1px solid #454345; */

  align-items: center;

  p {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    padding-left: 50px;
    cursor: pointer;
  }

  & div {
    position: absolute;

    color: #4e66f4;

    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;

const AddItem = styled.span`
  padding: 8px;
  border-radius: 9999px;

  background-color: #4e66f4;
  color: white;
`;

const Menu = styled(IoMdMenu)`
  transform: scale(2);
`;

const CloseMenu = styled(IoMdClose)`
  transform: scale(2);
  margin: 5%;
`;

const SideMenu = styled.div`
  height: 100vh;
  width: 70vw;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  background-color: #ebf4fc;
  /* border-right: 1px solid #454345; */
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  & div {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 8.5px;
    margin: 0;
    /* border-bottom: 1px solid #454345; */
    color: black;
    h2 {
      margin: 0;
    }
  }

  ul:first-of-type {
    /* justify-content: center; */
    margin-top: 100px 0;
    padding: 0 8.5px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;

    font-size: 1rem;
    font-weight: 600;
    color: #141415;

    li {
      span {
        font-weight: 400;
      }
    }
  }
  ul:last-of-type {
    list-style-type: none;
    font-size: 1.2rem;
    padding: 0 8.5px;

    color: #141415;

    li {
      padding: 10px 0;
    }
  }
`;
export default Navbar;
