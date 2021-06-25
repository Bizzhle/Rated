import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import styled from "@emotion/styled";
import { List, CardDiv, Button } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";

const Store_List = ({ storeList }) => {
  console.log(storeList);
  return (
    <>
      <div>
        <h1>Stores</h1>
        <div>
          <List>
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
          </List>
        </div>
        <Link href="/store_form">
          <Button>add a new store</Button>
        </Link>
      </div>
    </>
  );
};

export default Store_List;
