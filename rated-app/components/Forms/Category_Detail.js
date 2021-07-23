import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Button } from "../../styles";
import AuthContext from "../../stores/authContext";
import Detail_Card from "./Detail_Card";
import Link from "next/link";

const Category_Detail = ({ categoryDetail }) => {
  const { user } = useContext(AuthContext);

  const cards = categoryDetail.category_items.map((value, index) => {
    return <Detail_Card key={index} value={value} />;
  });

  return (
    <>
      <div>
        <h1>Items in {categoryDetail.category.name}</h1>
        <CardDetail>{cards}</CardDetail>
        {/* {user ? (
          <span>
            <Button onClick={handleUpdate}>Update</Button>
            <Button>Delete</Button>
          </span>
        ) : (
          ""
        )} */}
        <Link href={`/categorys/${categoryDetail.category._id}/update`}>
          <Button>Update</Button>
        </Link>
        <Link href={`/categorys/${categoryDetail.category._id}/delete`}>
          <Button>Delete</Button>
        </Link>
      </div>
    </>
  );
};

export default Category_Detail;

const CardDetail = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
