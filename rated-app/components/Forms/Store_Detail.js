import React, { useState, useContext } from "react";
import { Main, CardInfo, CardDiv, Button } from "../../styles";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";
import AuthContext from "../../stores/authContext";
import Detail_Card from "./Detail_Card";
import Link from "next/link";

const Store_Detail = ({ storeDetail }) => {
  const { user } = useContext(AuthContext);
  console.log(storeDetail);
  const router = useRouter();
  const [name, setName] = useState("");
  console.log(name);

  const cards = storeDetail.store_items.map((value, index) => {
    return <Detail_Card key={index} value={value} />;
  });

  return (
    <>
      <div>
        <h1>Items from {storeDetail.store.name}</h1>
      </div>
      <CardDetail>{cards}</CardDetail>
      {/* 
      {user ? (
        <span>
          <Link href={`/stores/${storeDetail.store._id}/update`}>
            <Button>Update</Button>
          </Link>

          <Button>Delete</Button>
        </span>
      ) : (
        ""
      )} */}
      <span>
        <Link href={`/stores/${storeDetail.store._id}/update`}>
          <Button>Update</Button>
        </Link>

        <Link href={`/stores/${storeDetail.store._id}/delete`}>
          <Button>Delete</Button>
        </Link>
      </span>
    </>
  );
};

const CardDetail = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
export default Store_Detail;
