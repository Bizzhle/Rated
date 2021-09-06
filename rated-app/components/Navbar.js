import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";
import { useRouter } from "next/router";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   const pageClickEvent = (e) => {
  //     if (
  //       sidebarRef.current !== null &&
  //       !sidebarRef.current.contains(e.target)
  //     ) {
  //       setIsOpen(!isOpen);
  //     }
  //   };

  //   if (isOpen) {
  //     window.addEventListener("click", pageClickEvent);
  //   }

  //   return () => {
  //     window.removeEventListener("click", pageClickEvent);
  //   };
  // }, [isOpen]);

  return (
    <Nav>
      {/* <div onClick={showSidebar}>
        <Menu style={{ height: 25, width: 25 }} />
      </div> */}

      <Link href="/">
        <p>Rated</p>
      </Link>

      <span>
        {!user ? (
          <span>
            <Button>
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/signup">Signup</Link>
            </Button>
          </span>
        ) : (
          <span>
            <Button>{user}</Button>

            <Button onClick={logout}>Logout</Button>
          </span>
        )}

        {user ? (
          <Link href="/item_form">
            <AddItem>
              <AiOutlineForm style={{ height: 20, width: 20 }} />
            </AddItem>
          </Link>
        ) : (
          ""
        )}
      </span>
      {/* <SideMenu ref={sidebarRef} isOpen={isOpen} onClick={showSidebar}>
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
      </SideMenu> */}
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
    cursor: pointer;
    color: #429ecb;
  }

  /* & div {
    position: absolute;
    color: #429ecb;
    @media screen and (min-width: 769px) {
      display: none;
    }
  } */

  span {
    display: flex;
  }

  @media screen and (max-width: 540px) {
    p {
      font-size: 1.5em;
    }

    & div {
      font-size: 1em;
    }
  }
`;

const AddItem = styled.span`
  padding: 15px;
  border-radius: 5000px;
  background-color: #429ecb;
  color: white;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: 400px) {
    padding: 8px;
  }
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

const Button = styled.button`
  background-color: #fff;
  color: #429ecb;
  font-weight: 700;

  line-height: 1.5rem;

  border-radius: 500px;
  cursor: pointer;
  padding: 10px 15px;
  margin-right: 10px;
  font: 1.325rem sans-serif;
  border: 1px solid #429ecb;
  text-align: center;

  :hover,
  :focus {
    opacity: 0.5;
    color: #fff;
    background-color: #429ecb;
    opacity: 1;
  }

  @media screen and (max-width: 540px) {
    font: 0.9rem sans-serif;
    padding: 10px 10px;
  }
`;
