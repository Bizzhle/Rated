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
  /* background-color: #429ecb; */

  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  letter-spacing: 1px;

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
    font-size: 1.325rem;

    li {
      /* border-top: 1px solid #d6d1ce;
      border-right: 2px solid #d6d1ce;
      border-bottom: 3px solid #d6d1ce;
      border-left: 2px solid #d6d1ce; */
      border: 2px solid #d6d1ce;
      width: 100%;
      padding: 10px 0;

      &:hover,
      &:focus,
      :active {
        border-color: #429ecb;
      }
    }

    li:first-child {
      border-left: none;
    }
    li:last-child {
      border-right: none;
    }
  }

  @media screen and (max-width: 540px) {
    ul {
      font-size: 0.8rem;
    }
  }
`;

export default CategoryBar;
