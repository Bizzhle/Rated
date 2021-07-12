import React from "react";
import { Main, CardInfo, CardDiv } from "../../styles";
import styled from "@emotion/styled";

const Store_Detail = ({ storeDetail }) => {
  console.log(storeDetail);

  const cards = storeDetail.store_items.map((value, index) => {
    return (
      <CardInfo key={index}>
        <h3>{value.title}</h3>
        <p>rating: {value.rating}</p>
        <span>
          <p>category: {value.category[0].name}</p>
          <p>store: {value.store[0].name}</p>
        </span>

        <p>{value.comment}</p>
      </CardInfo>
    );
  });

  return (
    <>
      <div>
        <h2>Items from {storeDetail.store.name}</h2>
      </div>
      {cards}
    </>
  );
};

const CardDetail = styled(CardDiv)`
  padding: 10px;
`;
export default Store_Detail;
