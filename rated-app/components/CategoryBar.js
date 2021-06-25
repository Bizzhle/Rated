import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

const CategoryBar = () => {
  return (
    <Bar>
      <ul>
        <Link href="/category_list">
          <li>CATEGORIES</li>
        </Link>
        <Link href="/">
          <li>ITEMS</li>
        </Link>

        <Link href="/store_list">
          <li>STORES</li>
        </Link>
      </ul>
    </Bar>
  );
};

const Bar = styled.div`
  /* border: 3px solid #d6d1ce; */
  background-color: black;
  /* border-bottom: 1px solid black; */

  color: white;

  /* box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-weight: 700;
    font-size: 15px;

    li {
      border: 1px solid white;
      width: 100%;
      padding: 10px 0;

      &:hover,
      &:focus {
        background-color: blue;
      }
    }
  }
`;

export default CategoryBar;
