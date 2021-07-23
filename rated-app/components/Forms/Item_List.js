import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { List } from "../../styles";
import Card from "../Card";
import AuthContext from "../../stores/authContext";

const Item_List = ({ children, itemList, categoryList, storeList, data }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log("someone is logged in");
    console.log(user);
  } else {
    console.log("nothing dey here");
  }
  console.log(user);
  return (
    <div>
      {/* <CatList>
        <h2>Categories</h2>
        {categoryList &&
          categoryList.map((value, index) => {
            return (
              <Link key={index} href={`/categorys/${value._id}`}>
                <CardDiv>
                  <li>{value.name}</li>
                </CardDiv>
              </Link>
            );
          })}
      </CatList> */}

      <h1>Items</h1>
      <List>
        {itemList &&
          itemList.map((value, index) => {
            return <Card key={index} value={value} />;
          })}
      </List>
      {/* <CatList>
        <h2>Stores</h2>

        {storeList &&
          storeList.map((value, index) => {
            return (
              <Link key={index} href={`/stores/${value._id}`}>
                <CardDiv>
                  <li>{value.name}</li>
                </CardDiv>
              </Link>
            );
          })}
      </CatList> */}
      {children}
    </div>
  );
};

export default Item_List;

const MainList = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 40px;
  }
`;

const CatList = styled(List)`
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 540px) {
    display: none;
  }
`;
